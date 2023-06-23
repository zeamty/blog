---
title: Go语言的一些常见坑
date: 2023-06-12
tags:
  - Go
summary: Go语言一些设计的讨论
---

## 空接口值(nil interface values)
* 先看一个例子：
``` go
package main

type MyError struct {}

func (e *MyError) Error() string {
    return "MyError"
}

func abc() error {
    var err *MyError = nil

    println(err == nil)  // Output: true

    return err // return时实际上发生了隐式类型转换，也即: return error(err)
}

func main() {
    err := abc()
    if err == nil {
        println(1)
    } else {
        println(2)
    }
    // Output: 2
}
```
* Go 语言根据接口类型是否包含一组方法将接口类型分成了两类：
    * 使用 `runtime.iface` 结构体表示包含方法的接口
    ```go
    type eface struct {
        _type *_type
        data  unsafe.Pointer
    }
    ```
    * 使用 `runtime.eface` 结构体表示不包含任何方法的 `interface{}` 类型
    ```go
    type iface struct {
        tab  *itab
        data unsafe.Pointer
    }
    ```
* 这两种实际上都是包含了两个指针的结构体，所以我们可以用一种类型统一表示，然后利用`unsafe`判断接口值是否为`nil`:
```go
type InterfaceStructure struct {
	pt uintptr // 到值类型的指针
	pv uintptr // 到值内容的指针
}

func IsNil(a interface{}) bool {
	o := (*InterfaceStructure)(unsafe.Pointer(&a))
	//return o.pt == 0 //Go语言对于接口值是否等于nil的判断逻辑，也就是接口值类型必须是nil
	return o.pv == 0
}

func main() {
	var a *MyError = nil
	println(a == nil)  // Output: true
	println(IsNil(a))  // Output: true

	println(error(a) == nil)  // Output: false
	println(IsNil(error(a)))  // Output: true

    println(error(nil) == nil) // Output: true
}
```
* 应对方案
    * 方案1：直接`return nil`, 避免接口值带类型
    ```go
    func abc() error {
        var err *MyError = nil

        if err != nil {
            return err
        }
        return nil
    }
    func main() {
        err := abc()
        if err == nil {
            println(1)
        } else {
            println(2)
        }
        // Output: 1
    }
    ```
    * 方案2：利用上面的`IsNil`函数
    ```go
    func abc() error {
        var err *MyError = nil

        // 其他代码...

        return err
    }
    func main() {
        err := abc()
        if IsNil(err) {
            println(1)
        } else {
            println(2)
        }
        // Output: 1
    }
    ```

## 循环变量
* 例1：循环体中使用循环变量的指针
```go
func test1() {
    var out []*int
    for i := 0; i < 3; i++ {
        out = append(out, &i)
    }
    fmt.Println("Values:", *out[0], *out[1], *out[2])
    // Values: 3 3 3
    fmt.Println("Addresses:", out[0], out[1], out[2])
    // Addresses: 0x40e020 0x40e020 0x40e020
}
```
* 例2：循环体中使用闭包捕获循环变量
```go
func test2() {
    var wg sync.WaitGroup
    for _, val := range []int{1, 2, 3} {
        wg.Add(1)
        go func() {
            defer wg.Done()
            println(val)
        }()
    }
    wg.Wait()
    // Output：
    // 3
    // 3
    // 3
}

```
* 原因：
    * Go中循环变量在循环中只有一份
    ```go
    func main() {
        for i := 0; i < 5; i++ {
            println(i)
            if i == 1 {
                i = 3
            }
        }
    }
    // Output:
    // 0
    // 1
    // 4
    ```
    * Go中闭包会捕获外部变量的引用
    ```go
    func main() {
        for i := 0; i < 5; i++ {
            println(i)
            func() {
                if i == 1 {
                    i = 3
                }
            }()
        }
    }
    // Output:
    // 0
    // 1
    // 4
    ```

* 应对方案：
    * 在循环体作用域中定义新变量进行值拷贝：
    ```go
    func test1() {
        for i := 0; i < 3; i++ {
            i := i // Copy i into a new variable.
            out = append(out, &i)
        }
    }
    ```
    * 利用函数值传参的特点避免闭包捕获外部变量引用：
    ```go
    func test2() {
        var wg sync.WaitGroup
        for _, val := range []int{1, 2, 3} {
            wg.Add(1)
            go func(val int) {
                defer wg.Done()
                println(val)
            }(val)
        }
        wg.Wait()
    }

    ```

## json反序列化时大数字丢失精度
* 一个例子
```go
func main() {
	dataStr := `{"id":6781234567890123456,"name":"aaa"}`
	data := make(map[string]interface{})
	err := json.Unmarshal([]byte(dataStr), &data)
	if err != nil {
		panic(err)
	}
	res, err := json.Marshal(data)
	if err != nil {
		panic(err)
	}
	println(string(res)) // Output: {"id":6781234567890124000,"name":"aaa"}
}
```
* 原因：`json.Unmarshal` 使用 `interface{}` 接收值时，对于数字一律转为`float64`(官方偷懒)，而`float64`在处理大整型数字时可能会丢失精度
* 应对方案
    * 方案1：使用 `json.Decoder` 来代替 `json.Unmarshal` 方法，并使用 `UseNumber()` 方法
    ```go
    func main() {
        dataStr := `{"id":6781234567890123456,"name":"aaa"}`
        decode := json.NewDecoder(strings.NewReader(dataStr))
        decode.UseNumber()
        data := make(map[string]interface{})
        err := decode.Decode(&data)
        if err != nil {
            panic(err)
        }
         // 数字会转为json.Number而不是float64，可以使用Int64()、Float64()转化为具体类型
        idx, err := data["id"].(json.Number).Int64()
        if err != nil {
            panic(err)
        }
        println(idx) // Output： 6781234567890123456

        res, err := json.Marshal(data)
        if err != nil {
            panic(err)
        }
        println(string(res)) // Output: {"id":6781234567890123456,"name":"aaa"}
    }
    ```
    * 方案2：使用具体类型而不是`interface{}`一把梭，尤其是对于习惯使用Python的同学尤其如此(`dict` -> `map[string]interface{}`)
    ```go

    func main() {
        dataStr := `{"id":6781234567890123456,"name":"aaa"}`
        data := struct {
            ID   int64  `json:"id"`
            // Go的一大槽点，使用首字母大写表示可导出字段，导致经常需要写struct tag
            Name string `json:"name"`
        }{}
        err := json.Unmarshal([]byte(dataStr), &data)
        if err != nil {
            panic(err)
        }

        res, err := json.Marshal(data)
        if err != nil {
            panic(err)
        }
        println(string(res)) // Output: {"id":6781234567890123456,"name":"aaa"}
    }
    ```


## 切片append操作

* 一个例子
```go
a := make([]int, 5, 10)
a = append(a, 1, 2, 3)
fmt.Println(a) // Output: 0 0 0 0 0 1 2 3
```

* 利用泛型简单模拟`append()`，可以观察一些实现细节，避免使用时踩坑
```go
type Slice[T any] struct {
	Data *[]T // 实际类型是uintptr，这里简化处理
	Len  int
	Cap  int
}

func Append[T any](sourceSlice Slice[T], elements ...T) Slice[T] {
	newSlice := Slice[T]{}
	newSlice.Len = sourceSlice.Len + len(elements)
	if len(elements)+sourceSlice.Len <= sourceSlice.Cap {
        // 无需对底层数组扩容，可以直接复用
		newSlice.Cap = sourceSlice.Cap
		newSlice.Data = sourceSlice.Data
	} else {
        // 需要申请新数组
		newSlice.Cap = sourceSlice.Cap * GROW_FACTOR
		newData := make([]T, 0, newSlice.Cap)
		copy(newData, *sourceSlice.Data)
		newSlice.Data = &newData
	}
	for i := range elements {
		(*newSlice.Data)[sourceSlice.Len+i] = elements[i]
	}
	return newSlice // 每次都返回了新的slice
}

```
* 另一个例子
```go
a := make([]int, 0, 2)
b := append(a, 1)
c := append(a, 2)
fmt.Printf("%#v %#v %#v\n", a, b, c)  // Output: []int{} []int{2} []int{2}
```

## 零值
* 零值设计好处是可以规避一些变量未初始化产生的未定义行为，同时也能产生一些便利
```go
func main() {
	a := []int{1, 1, 3, 4, 5, 4, 3}
	counter := map[int]int{}
	for _, v := range a {
		counter[v]++
	}
	fmt.Println(counter) // Output: map[1:2 3:2 4:2 5:1]

	b := []struct {
		Name string
		Age  int
	}{
		{Name: "Jack", Age: 20},
		{Name: "Jane", Age: 21},
		{Name: "Mike", Age: 20},
		{Name: "Tom", Age: 22},
	}
	ageMap := map[int][]string{}
	for _, v := range b {
        // 注意：slice零值是nil，而append可以对slice的零值nil操作
		ageMap[v.Age] = append(ageMap[v.Age], v.Name)
	}
	fmt.Println(ageMap) // Output: map[20:[Jack Mike] 21:[Jane] 22:[Tom]]
}
```
* 缺点是在一些场景如果默认值是零值，无法区分是否传参和传了默认值
    * 有时候可以使用基本类型的指针类型处理，`nil`代表未传参，基本类型的零值表示传了默认值，比如Gin框架绑定参数就可以这样处理
    ```go
    type User struct {
        ID   *int    `json:"id"`
        Name *string `json:"name"`
    }
    func test(c *gin.Context) {
        var u User
        err := c.ShouldBindJson(&u)
        if err != nil {
            panic(err)
        }
    }
    ```

## 函数默认值
* Go中的函数既不支持重载，也不支持函数默认值，导致需要使用Option模式等方式舍近求远地模拟函数默认值
```go
type DB struct {
	schema string
	host   string
	port   int
}

type Option func(db *DB)

func WithSchema(schema string) Option {
	return func(db *DB) { db.schema = schema }
}

func WithHost(host string) Option {
	return func(db *DB) { db.host = host }
}

func WithPort(port int) Option {
	return func(db *DB) { db.port = port }
}

func NewDB(options ...Option) (*DB, error) {
	db := &DB{
		port: 3306,
	}
	for _, opt := range options {
		opt(db)
	}
	return db, nil
}

func main() {
	db, err := NewDB(WithHost("127.0.0.1"), WithSchema("test"))
	if err != nil {
		panic(err)
	}
}
```

## 其他槽点
### 不可变语义
* Go中缺失不可变语义(比如Java中的`final`)，无法阻止调用方修改某些字段，可能会产生隐蔽且难以排查的bug.
### 错误处理
* `if err != nil` 很蠢，不如抛异常。如果不想用异常，建议Go官方抄下Rust的`Result`枚举类。
### 接口隐式实现
* Go中接口采取了隐式实现的方式，不需要申明(`implements`)，可能是想模仿鸭子类型。如果需要在编译期检查某个类型是否实现了指定接口，可以使用 `var _ Interface = (*Struct)(nil)`
### 时间格式化
* 不使用其他语言比较成熟的方案(`YYYY-MM-DD`)，而是使用 `time.Now().Format("2006-01-02 15:04:05")` 这种奇葩的方式。
### 大道至简
* 通常用来给不合理的设计开脱，或者编译器作者想偷懒就会抛出这句话。几年前用这句话来辩解Go语言不需要泛型，结果Go 1.18 还是加上了泛型。

## Go的优势
* 虽然Go有一些槽点，但是优点也很多
    * 有栈协程(goroutine)和CSP并发模型(channel)
        * 使用同步的方式处理并发，易于理解（相对于响应式编程等方式）
        * 处理IO密集型场景时性能优异
    * 可以视为简化的C语言，简单易上手，加之丰富的标准库，使用比较方便
    * 编译速度快，依赖少所以部署方便，同时Runtime相对轻量，冷启动速度快，更适配微服务


## 参考
* [Go 语言接口的原理](https://draveness.me/golang/docs/part2-foundation/ch04-basic/golang-interface/)
* <https://github.com/golang/go/wiki/CommonMistakes>
* [深入理解 Go Json.Unmarshal 精度丢失之谜](https://www.51cto.com/article/697019.html)
