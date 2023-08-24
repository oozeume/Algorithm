import sys
from collections import deque
input = sys.stdin.readline
s = input()
n, m = map(int, input().split())
arr = [list(input().strip()) for _ in range(n)]
visited = [False] * (n+1)

def bfs(x, y, startIndex):
  q = deque()
  q.append((x, y))

  dx = [1,-1,0,0]
  dy = [0,0,1,-1]

  word = s[startIndex] # word는 지금 A
  idx = startIndex

  while q:
    ci, cj = q.popleft()
    for i in range(4):
      nx = ci + dx[i]
      ny = cj + dy[i]

      if 0 <= nx < n and 0 <= ny < m:
        if arr[nx][ny] == s[idx + 1]: # 인접요소의 값이 B이면
          word += s[idx + 1] # word = 'AB'가 되고
          print('word ->', word)
          q.append((nx, ny)) # 큐에 추가
          idx += 1 # startIndex 증가
          print('idx ->', idx)

  

for i in range(n):
  for j in range(m):
    if arr[i][j] == s[0]:
      bfs(i, j, 0)