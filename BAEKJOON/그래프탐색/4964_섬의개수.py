from collections import deque
answer = [] # while문에서 해결한 결과를 answer에 append

dx = [1,-1,0,0,-1,-1,1,1]
dy = [0,0,-1,1,-1,1,-1,1]

def bfs(x, y):
  q = deque()
  q.append((x, y))
  visited[y][x] = True

  while q:
    a, b = q.popleft()
    for i in range(8):
      nx = a + dx[i]
      ny = b + dy[i]
        
      if nx < 0 or nx >= m or ny <0 or ny >= n or visited[ny][nx] == True or graph[ny][nx] == 0:
        continue
      q.append((nx, ny))
      visited[ny][nx] = True

while True:
  count = 0
  m, n = map(int, input().split())

  if n == 0 and m == 0:
    break

  graph = [list(map(int, input().split())) for _ in range(n)]
  visited = [[False] * m for _ in range(n)]

  for i in range(n):
    for j in range(m):
      if graph[i][j] == 0 or visited[i][j] == True:
        continue
      else:
        bfs(j, i)
        count += 1
  
  answer.append(count)

print(*answer, sep="\n")
