---
title: Go语言漫谈
date: 2023-05-04
tags:
  - Go
summary: Go语言一些设计的讨论
---

# 空接口(nil interface values)
* 先看一个例子：
``` go
package main

type MyError struct {}

func (e *MyError) Error() string {
    return "MyError"
}

func abc() error {
    var err *MyError = nil
    return err
}

func main() {
    err := abc()
    if err != nil {
        println(1)
    } else {
        println(2)
    }
    // Output: 1
}
```
* reflect反射库中的IsNil判断
```go
func (v Value) IsNil() bool {
	k := v.kind()
	switch k {
	case Chan, Func, Map, Pointer, UnsafePointer:
		if v.flag&flagMethod != 0 {
			return false
		}
		ptr := v.ptr
		if v.flag&flagIndir != 0 {
			ptr = *(*unsafe.Pointer)(ptr)
		}
		return ptr == nil
	case Interface, Slice:
		// Both interface and slice are nil if first word is 0.
		// Both are always bigger than a word; assume flagIndir.
		return *(*unsafe.Pointer)(v.ptr) == nil
	}
	panic(&ValueError{"reflect.Value.IsNil", v.kind()})
}
```
* 利用unsafe判断接口值为nil
```go
func IsNil(a interface{}) bool {
    return (*struct{
        pt uintptr
        pv uintptr
    })(unsafe.Pointer(&a)).pv == 0
}
```

# 循环变量
* 官方Wiki: <https://github.com/golang/go/wiki/CommonMistakes>
```go
func main() {
    var out []*int
    for i := 0; i < 3; i++ {
        out = append(out, &i)
    }
    fmt.Println("Values:", *out[0], *out[1], *out[2])  // Values: 3 3 3
    fmt.Println("Addresses:", out[0], out[1], out[2])  // Addresses: 0x40e020 0x40e020 0x40e020
}

func test() {
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
* 原因：Go中循环变量在循环中只有一份

* 修改方案：
```go
func main() {
    for i := 0; i < 3; i++ {
        i := i // Copy i into a new variable.
        out = append(out, &i)
    }
}
func test() {
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

# 零值

## 切片零值 & append操作

* append一个例子
```go
a := make([]int, 5, 10)
a = append(a, 1, 2, 3)
fmt.Println(a) // Output: 0 0 0 0 0 1 2 3
```

* 利用泛型实现append
```go
type Slice[T any] struct {
	len  int
	cap  int
	data *[]T
}

func Append[T any](sourceSlice Slice[T], elements ...T) Slice[T] {
    newSlice := Slice[T]{}
    newSlice.len = sourceSlice.len + len(elements)
    if len(elements)+sourceSlice.len <= sourceSlice.cap {
        newSlice.cap = sourceSlice.cap
        newSlice.data = sourceSlice.data
    } else {
        newSlice.cap = sourceSlice.cap * GROW_FACTOR
        newData := make([]T, 0, newSlice.cap)
        copy(newData, *sourceSlice.data)
        newSlice.data = &newData
    }
    for i := range elements {
        (*newSlice.data)[sourceSlice.len+i] = elements[i]
    }
    return newSlice  // 每次都返回了新的slice
}

```
* 另一个例子
```go
a := make([]int, 0, 2)
b := append(a, 1)
c := append(a, 2)
fmt.Printf("%#v %#v %#v\n", a, b, c)  // Output: []int{} []int{2} []int{2}
```

# 不可变语义

# json反序列化