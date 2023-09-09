from collections import deque
import sys
input = sys.stdin.readline 

n = int(input())
for _ in range(n):
  a,b = map(int, input().split())
  arr = list(map(int, input().split()))
  q = deque()
  for i in range(len(arr)):
    q.append((arr[i], i))

  cnt = 0

  while q: # 큐가 빌때까지 진행
    x, y = q.popleft()

    if len(q) != 0:
      if x >= max(q)[0]:
        cnt+=1
        if y == b:
          print(cnt)
          break
      else:
        q.append((x, y))
        pass
    else:
      cnt+=1
      print(cnt)
