# Python

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
