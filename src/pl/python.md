# Python

## 基础
* and和or:
    * x and y:若x不为false(比如0,空字符串是false),返回y,否则返回x.
    * x or y与此类似。
* 拷贝序列需使用切片操作符[:]，否则对象将指向原对象。
* Python类中以双下划线开头的变量是私有变量。一般将只在类中使用的变量加单下划线前缀。
* Python不会自动调用父类的构造函数，需用parentName.__init__(self, *vars)手动调用。
* 在解释器中_表示上一个表达式的值。
* print支持输出重定向。
* python是强类型语言，不支持数字和字符串直接相加。

## 匿名函数、闭包

``` python

def counter1():
    x = [0]
    def inner():
        x[0] += 1
        return x[0]
    return inner

def counter2():
    counter2.cnt = 0
    def inner():
        counter2.cnt += 1
        # inner.cnt += 1
        return counter2.cnt
    #inner.cnt = 0
    return inner

def counter3():
    x = 0
    def inner():
        x += 1   # UnboundError
        return x

c = counter()
c()
c()

def a(x):
    return lambda : x+1
a = lambda x: lambda : x + 1
a(1)()
```

## setattr
getattr

## 协程
gevent、asyncio

## module
schedule
atexit
timeit

```python
schedule.every(10).minutes.do(func)
schedule.run_pending()
```

## 迭代器
```python
a = iter(aa_list)
for aa in a:
    print aa
print list(a)  # empty: 迭代器只能遍历一次，如需多次，需先转换成列表等
```

## 正则表达式
```python
import re

re.sub(r'([1-3]*) (?P<name>[qw]*)', '\g<1> 000 \g<name>', '123 qwe')  # '123 000 qwe'

```
