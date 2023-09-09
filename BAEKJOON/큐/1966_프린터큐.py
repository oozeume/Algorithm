from collections import deque
import sys
input = sys.stdin.readline 

N = int(input())

answer = []

for _ in range(N):
  n, m = map(int, input().split())
  q = deque(list(map(int, input().split()))) # 중요도 배열
  idx = deque(list(range(n)))
  cnt = 0

  while q:
    if q[0] == max(q):
      cnt +=1
      q.popleft()
      popIdx = idx.popleft()
      if popIdx == m:
        answer.append(cnt)
    else:
      q.append(q.popleft())
      idx.append(idx.popleft())

for x in answer:
  print(x)

      



    

