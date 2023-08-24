from collections import deque
n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

answer = []

dx = [1,-1,0,0]
dy = [0,0,-1,1]

visited = [[False] * (n+1) for _ in range(n+1)]

def bfs(x, y):
  q = deque()
  q.append((x,y))
  visited[x][y] = True
  cnt = 1

  while q:
    ci, cj = q.popleft()
    for i in range(4):
      nx = ci + dx[i]
      ny = cj + dy[i]

      if nx < 0 or nx >= n or ny < 0 or ny >= n or visited[nx][ny] == True:
        continue
      if arr[nx][ny] >= n:
        q.append((nx, ny))
        visited[nx][ny] = True
        cnt += 1
  
  return cnt

for i in range(n):
  for j in range(n):
    if arr[i][j] >= n and visited[i][j] == False:
      answer.append(bfs(i, j))

print(len(answer))