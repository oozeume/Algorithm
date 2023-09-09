import sys
input = sys.stdin.readline
from collections import deque
n = int(input())

d = deque()

for _ in range(n):
  arr = list(map(str, input().split()))
  x = 0
  a = arr[0]
  if len(arr) > 1:
    x = int(arr[1])
  if a == 'push_front':
    d.appendleft(x)
  elif a =='push_back':
    d.append(x)
  elif a =='pop_front':
    if len(d) == 0:
      print(-1)
    else:
      y = d.popleft()
      print(y)  
  elif a == 'pop_back':
    if len(d) == 0:
      print(-1)
    else:
      y = d.pop()
      print(y)
  elif a  =='size':
    print(len(d))
  elif a == 'empty':
    if len(d) == 0:
      print(1)
    else:
      print(0)
  elif a == 'front':
    if len(d) == 0:
      print(-1)
    else:
      print(d[0])
  elif a  == 'back':
    if len(d) == 0:
      print(-1)
    else:
      print(d[-1])