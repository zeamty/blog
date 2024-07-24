---
title: Go语言的一些常见坑（2）
date: 2024-07-22
tags:
  - Go
summary: Go语言一些设计的讨论（2）
---

## range map的无序性和随机性
* 这段代码(取可用连接id)存在什么问题？
```go
type Linker struct{}

var sessionList []*Linker

func GetValidSessionId() int {
	for idx, s := range sessionList {
		if s != nil {
			return idx
		}
	}
	return -1
}
```
> 存在的问题：未考虑负载均衡，会导致雪崩

* 第一次改造尝试（利用map遍历的无序性）：
```go
var sessionMap = map[int]*Linker{}

func GetValidSessionId() int {
	for idx, s := range sessionMap {
		if s != nil {
			return idx
		}
	}
	return -1
}
```
> 但是测试时发现有问题：
> ```go
> func TestGetRandomSess(t *testing.T) {
> 	sessionMap = map[int]*Linker{
> 		1: {},
> 		2: nil,
> 		3: {},
> 		4: {},
> 		5: nil,
> 	}
>
> 	m := map[int]int{}
> 	for i := 0; i < 100000; i++ {
> 		m[getRandomValidSessionId()]++
> 	}
> 	t.Log(m) // map[1:75038 3:12612 4:12350]
> }
>
> // 测试不同个数元素的map遍历
> func TestRangeMap(t *testing.T) {
> 	for i := 2; i <= 10; i++ {
> 		m := map[int]struct{}{}
> 		for j := 0; j < i; j++ {
> 			m[j] = struct{}{}
> 		}
>
> 		s := map[int]int{}
>  		for k := 0; k < 100000; k++ {
> 			for l := range m {
> 				s[l]++
> 				break
> 			}
> 		}
> 		fmt.Printf("%d keys: %v\n", len(s), s)
>		/*
>		 2 keys: map[0:87542 1:12458]
>		 3 keys: map[0:74810 1:12713 2:12477]
>		 4 keys: map[0:62533 1:12541 2:12419 3:12507]
>		 5 keys: map[0:49959 1:12427 2:12614 3:12391 4:12609]
>		 6 keys: map[0:37675 1:12398 2:12461 3:12487 4:12614 5:12365]
>		 7 keys: map[0:24935 1:12517 2:12614 3:12408 4:12328 5:12641 6:12557]
>		 8 keys: map[0:12585 1:12462 2:12474 3:12525 4:12520 5:12532 6:12648 7:12254]
>		 9 keys: map[0:18592 1:37524 2:6226 3:6254 4:6255 5:6217 6:6238 7:6412 8:6282]
>		 10 keys: map[0:6224 1:43939 2:6223 3:6192 4:6139 5:6206 6:6234 7:6226 8:6288 9:6329]
>        */
> 	}
> }
> ```
* 原因在于map的遍历不是随机而是无序
>     go语言中关于range map的规范：The iteration order over maps is not specified and is not guaranteed to be the same from one iteration to the next.
>
> 这里不打算深究Go底层map遍历的实现(有兴趣的可以结合上面第二个测试用例探究)，而是思考两个问题：
>	1. map(哈希表)增删改查的时间复杂度都是O(1)，如果要随机取值，时间复杂度是多少？
>	2. 什么样的数据结构，随机取值的时间复杂度是O(1)?

* 最后利用slice做随机取值：
```go
func GetValidSessionId() int {
	validSessIds := []int{}
	for idx, s := range sessionList {
		if s != nil {
			validSessIds = append(validSessIds, idx)
		}
	}
	if len(validSessIds) > 0 {
		return validSessIds[rand.Intn(len(validSessIds))]
	}
	return -1
}
```


## 不可变语义的缺失
* 先看一个例子：
```go
// sug.go
package sug

import "encoding/json"

type Suggest struct {
	Query string `json:"query"` // 赋值后不应被修改
	Url   string `json:"url"`   // 赋值后不应被修改
}

// 从配置内容中解析，此处简要实现
func GetSuggestConf() *Suggest {
	conf := `{"query": "2024高考志愿怎么填", "url": "http://a.com?fr=s"}`
	var s Suggest
	json.Unmarshal([]byte(conf), &s)
	return &s
}

// cache_test.go
package test

import (
	"sug"
	"sync"
	"testing"
)

var cache = sync.Map{} // 本地缓存

func InitCache() {
	cache.Store("s", sug.GetSuggestConf())
}

// 对外提供的接口
func GetSugUrl(k string) string {
	if v, ok := cache.Load(k); ok {
		if sug, ok := v.(*sug.Suggest); ok {
			sug.Url += "&q=" + sug.Query // 不应被修改的字段被改动！！
			return sug.Url
		}
	}
	return ""
}

func TestGetSugUrl(t *testing.T) {
	InitCache()

	t.Log(GetSugUrl("s")) // http://a.com?fr=s&q=2024高考志愿怎么填
	t.Log(GetSugUrl("s")) // http://a.com?fr=s&q=2024高考志愿怎么填&q=2024高考志愿怎么填
	t.Log(GetSugUrl("s")) // http://a.com?fr=s&q=2024高考志愿怎么填&q=2024高考志愿怎么填&q=2024高考志愿怎么填
	t.Log(GetSugUrl("s")) // http://a.com?fr=s&q=2024高考志愿怎么填&q=2024高考志愿怎么填&q=2024高考志愿怎么填&q=2024高考志愿怎么填
	t.Log(GetSugUrl("s")) // http://a.com?fr=s&q=2024高考志愿怎么填&q=2024高考志愿怎么填&q=2024高考志愿怎么填&q=2024高考志愿怎么填&q=2024高考志愿怎么填
	// 最终随着接口不停被调用，接口返回值不停增大，拖垮整条服务链路，最终服务OOM
}
```
> 原因在于：Go语言中缺少变量的不可变语义(变量初始化后值不能被修改，类似于Java中的final)，无法保证可导出变量或字段值被修改。

* 一种规避方案(利用内嵌结构体和函数不可变的特性)：
```go
// sug.go
package sug

import "encoding/json"

type innerSuggest struct {
	Query string `json:"query"`
	Url   string `json:"url"`
}

type Suggest struct {
	innerSuggest
}

func (s *Suggest) Query() string {
	return s.innerSuggest.Query
}

func (s *Suggest) Url() string {
	return s.innerSuggest.Url
}

func GetSuggestConf() *Suggest {
	conf := `{"query": "2024高考志愿怎么填", "url": "http://a.com?fr=s"}`
	var s innerSuggest
	json.Unmarshal([]byte(conf), &s)
	return &Suggest{s}
}

// cache_test.go
package test

import (
	"sug"
	"sync"
	"testing"
)

var cache = sync.Map{}

func InitCache() {
	cache.Store("s", sug.GetSuggestConf())
}

func GetSugUrl(k string) string {
	if v, ok := cache.Load(k); ok {
		if sug, ok := v.(*sug.Suggest); ok {
			url := sug.Url() + "&q=" + sug.Query()
			return url
		}
	}
	return ""
}

func TestGetSugUrl(t *testing.T) {
	InitCache()

	t.Log(GetSugUrl("s")) // http://a.com?fr=s&q=2024高考志愿怎么填
	t.Log(GetSugUrl("s")) // http://a.com?fr=s&q=2024高考志愿怎么填
	t.Log(GetSugUrl("s")) // http://a.com?fr=s&q=2024高考志愿怎么填
	t.Log(GetSugUrl("s")) // http://a.com?fr=s&q=2024高考志愿怎么填
	t.Log(GetSugUrl("s")) // http://a.com?fr=s&q=2024高考志愿怎么填
}

```


## 内存对齐(struct field alignment)和伪共享(false sharing)
* 内存对齐在很多编程语言中都存在，go语言也不例外：
```go
type S1 struct {
	A int32
	B int64
	C int32
	D int64
}

type S2 struct {
	A int32
	C int32
	B int64
	D int64
}

type S3 struct {
	A struct{}
	B int64
}

type S4 struct {
	B int64
	A struct{}
}

func TestFieldAlignment(t *testing.T) {
	t.Logf("%d", unsafe.Sizeof(S1{})) // 32
	t.Logf("%d", unsafe.Sizeof(S2{})) // 24
	t.Logf("%d", unsafe.Sizeof(S3{})) // 8
	t.Logf("%d", unsafe.Sizeof(S4{})) // 16
}
```
> 编译器做内存对齐的原因：
>   1. 加快内存读取效率：处理器从内存中并不是按一个一个字节读取，而是每次按机器字长(等于数据总线和寄存器位宽)读取多个字节。对于某些数据类型，在struct中对某些字段间做了填充(比如上面结构S1中A和B之间、C和D字段之间分别填充了4个字节)。
>   2. 防止某些异常：如果结构体最后一个字段是`struct{}`，会做字段对齐，比如上面的S4，目的是防止访问越界。
>
> 这里思考一个问题：为什么编译器不做struct字段顺序的自动调整，而是填充无用内容浪费空间？
* 显然，通过人调整结构体字段顺序，可以减少内存占用，提高程序性能。但有时候可能会适得其反，比如接下来要讨论的内容。
* go语言中`sync.Pool`中有如下内容：
```go
type poolLocal struct {
	poolLocalInternal

	// Prevents false sharing on widespread platforms with
	// 128 mod (cache line size) = 0 .
	pad [128 - unsafe.Sizeof(poolLocalInternal{})%128]byte
}
```
> `poolLocal`中填充了一些字节，目的是为了防止伪共享(false sharing)降低性能。
* 测试伪共享：
```go
type T1 struct {
	A int64
	B int64
}

func BenchmarkT1(b *testing.B) {
	t := &T1{}
	b.RunParallel(func(p *testing.PB) {
		for p.Next() {
			atomic.AddInt64(&t.A, 1)
			atomic.AddInt64(&t.B, 1)
		}
	})
}

type T2 struct {
	A int64
	_ [49]byte // 思考一下，为什么填充这些字节？和哪些因素相关？
	B int64
}

func BenchmarkT2(b *testing.B) {
	t := &T2{}
	b.RunParallel(func(p *testing.PB) {
		for p.Next() {
			atomic.AddInt64(&t.A, 1)
			atomic.AddInt64(&t.B, 1)
		}
	})
}
/*
 BenchmarkT1
BenchmarkT1-4   	42094551	        35.31 ns/op	       0 B/op	       0 allocs/op
BenchmarkT2
BenchmarkT2-4   	49011622	        23.36 ns/op	       0 B/op	       0 allocs/op
*/
```
> 可以看出，通过填充多余字节，反而提高了并发性能，这是因为填充多余字节避免了伪共享。
* 伪共享发生的原因：在多核并发时，如果多个线程对同一缓存行(cache line)的不同字段同时做了原子化修改导致缓存失效(缓存一致性协议)，进而导致缓存命中率下降和程序性能下降。
> 伪共享发生的条件：1. 不同字段位于同一缓存行；2.并发执行原子化操作，触发缓存失效。
* 所以通过填充多余字节，使得不同字段位于不同缓存行，可以避免伪共享问题。
* 缓存行大小与处理器架构有关，`golang.org/x/sys/cpu`提供了`cpu.CacheLinePad`可以帮助处理不同硬件平台的字段填充：
```go
import (
	"sync/atomic"
	"testing"

	"golang.org/x/sys/cpu"
)

type T3 struct {
	A int64
	_ cpu.CacheLinePad
	B int64
}

func BenchmarkT3(b *testing.B) {
	t := &T3{}
	b.RunParallel(func(p *testing.PB) {
		for p.Next() {
			atomic.AddInt64(&t.A, 1)
			atomic.AddInt64(&t.B, 1)
		}
	})
	// BenchmarkT3-4
	// 49838684	        23.25 ns/op	       0 B/op	       0 allocs/op
}
```
* 最后，关于性能优化，谨记：过早优化是万恶之源。
* 所以上述性能优化技巧日常开发时没必要用，了解其原理即可。
* 不要陷入八股文细节，最核心的永远是：数据结构与算法、计算机组成原理、操作系统、计算机网络。

<!-- ## 并发正确性
* 下面的程序存在什么问题？
```go
var a = 1

func main() {
	go func() {
		a += 1
	}()
	fmt.Println(a) // a的值是不确定的
}
```
* 并发不正确主要由两个原因导致：1. 指令重排序，2. 多核缓存不一致。 -->
