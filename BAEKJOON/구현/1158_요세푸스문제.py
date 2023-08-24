from collections import deque

n, k = map(int, input().split())

q = deque()
for i in range(1, n+1):
  q.append(i)

answer = []
i = 1
while q:
  x = q.popleft()
  if i == k:
    answer.append(x)
    i = 1
  else:
    q.append(x)
    i+=1

print(str(answer).replace('[', '<').replace(']', '>'))