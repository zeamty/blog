

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
