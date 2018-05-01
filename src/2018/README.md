# 求解网传2018年刑侦科推理试题

## 原题
<p />
<!--
<a target="_blank" :href="$withBase('/static/img/fasrhknvhaf0.jpeg')"><img width="50%" :src="$withBase('/static/img/fasrhknvhaf0.jpeg')"></a>
-->
<img width="80%" :src="$withBase('/static/img/fasrhknvhaf0.jpeg')">

## 暴力求解(Python)
``` python
# -*- coding: utf-8 -*-
# 微博江苏刑侦科考试题

def ok(l):
    # q1:none
    # q2:
    if not ((l[2] == 'A' and l[5] == 'C') or (l[2] == 'B' and l[5] == 'D') or (l[2] == 'C' and l[5] == 'A') or (l[2] == 'D' and l[5] == 'B')):
        return False
    # q3:
    if not ((l[3] == 'A' and l[3] != l[6] and l[6] == l[2] == l[4]) or (l[3] == 'B' and l[3] != l[6] and l[3] == l[2] == l[4]) or (l[3] == 'C' and l[3] != l[2] and l[3] == l[6] == l[4]) or (l[3] == 'D' and l[3] != l[4] and l[3] == l[6] == l[2])):
        return False
    # q4:
    if not ((l[4] == 'A' and l[1] == l[5]) or (l[4] == 'B' and l[2] == l[7]) or (l[4] == 'C' and l[1] == l[9]) or (l[4] == 'D' and l[6] == l[10])):
        return False
    # q5:
    if not ((l[5] == 'A' and l[8] == l[5]) or (l[5] == 'B' and l[4] == l[5]) or (l[5] == 'C' and l[9] == l[5]) or (l[5] == 'D' and l[7] == l[5])):
        return False
    # q6:
    if not ((l[6] == 'A' and l[2] == l[4] == l[8]) or (l[6] == 'B' and l[1] == l[6] == l[8]) or (l[6] == 'C' and l[3] == l[10] == l[8]) or (l[6] == 'D' and l[5] == l[9] == l[8])):
        return False
    # q7:
    if not ((l[7] == 'A' and l.count('C') < min(l.count('A'), l.count('B'), l.count('D'))) or (l[7] == 'B' and l.count('B') < min(l.count('A'), l.count('C'), l.count('D'))) or (l[7] == 'C' and l.count('A') < min(l.count('B'), l.count('C'), l.count('D'))) or (l[7] == 'D') and l.count('D') < min(l.count('A'), l.count('B'), l.count('C'))):
        return False
    # q8:
    if not ((l[8] == 'A' and abs(ord(l[7]) - ord(l[1])) != 1) or (l[8] == 'B' and abs(ord(l[5]) - ord(l[1])) != 1) or (l[8] == 'C' and abs(ord(l[2]) - ord(l[1])) != 1) or (l[8] == 'D' and abs(ord(l[10]) - ord(l[1])) != 1)):
        return False
    # q9:
    if not ((l[9] == 'A' and (l[1] == l[6]) != (l[6] == l[5])) or (l[9] == 'B' and (l[1] == l[6]) != (l[10] == l[5])) or (l[9] == 'C' and (l[1] == l[6]) != (l[2] == l[5])) or (l[9] == 'D' and (l[1] == l[6]) != (l[9] == l[5]))):
        return False
    # q10:
    q10 = max(l.count('A'), l.count('B'), l.count('C'), l.count('D')) - min(l.count('A'), l.count('B'), l.count('C'), l.count('D'))
    if not ((l[10] == 'A' and q10 == 3) or (l[10] == 'B' and q10 == 2) or (l[10] == 'C' and q10 == 4) or (l[10] == 'D' and q10 == 1)):
        return False

    return True
   
def get_next_list(l):
    i = 1
    while i < 11:
        if l[i] == 'A':
            l[i] = 'B'
            break
        elif l[i] == 'B':
            l[i] = 'C'
            break
        elif l[i] == 'C':
            l[i] = 'D'
            break
        elif l[i] == 'D':
            l[i] = 'A'
        i += 1
    else:
        return None
    return l

l = [''] + ['A'] * 10
while l is not None:
    if ok(l):
        print l[1:]
    l = get_next_list(l)

```

## 答案
``` bash
['B', 'C', 'A', 'C', 'A', 'C', 'D', 'A', 'B', 'A']
```
