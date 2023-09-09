import sys
input = sys.stdin.readline
from collections import deque

n = int(input())
q = deque()

for i in range(1, n+1):
  q.append(i)

if len(q) ==1:
  print(1)
else:
  while True:
    q.popleft()
    if len(q) == 1:
      print(q[0])
      break
    else:
      x = q.popleft()
      q.append(x)
