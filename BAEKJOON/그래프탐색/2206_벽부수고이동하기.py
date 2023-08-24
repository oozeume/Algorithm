from collections import deque
n, m = map(int, input().split())
graph = []
for _ in range(n):
  graph.append(list(map(int, input())))

dx = [1,-1,0,0]
dy = [0,0,-1,1]

def bfs(x, y):
  visited = [[[0 for _ in range(2)] for _ in range(m)] for _ in range(n)]
  print(visited)
  visited[x][y][0] = 1

  q = deque()
  q.append((x, y, 0))

  while q:
    x, y, c = q.popleft()
    if (x, y) == (n-1, m-1):
      return visited[x][y][c]

    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      if nx < 0 or nx >= n or ny <0 or ny >= m:
        continue
      if graph[nx][ny] == 1 and c == 0 and not visited[nx][ny][1]:
        q.append((nx, ny, 1))
        visited[nx][ny][1] = visited[x][y][0] + 1 
      elif graph[nx][ny] == 0 and not visited[nx][ny][c]:
        q.append((nx, ny,c))
        visited[nx][ny][c] = visited[x][y][c] + 1
  return 0

result = bfs(0, 0)
if result:
  print(result)
else:
  print(-1)