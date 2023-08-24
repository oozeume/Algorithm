from collections import deque

dx = [0,1,0,-1]
dy = [-1,0,1,0]

def bfs(arr, x, y, value):
  queue = deque()
  queue.append((x,y))
  while queue:
    ci, cj = queue.popleft()
    for i in range(4):
      nx = ci + dx[i]
      ny = cj + dy[i]
      if 0 <= nx < n and 0 <= ny < n:
        if arr[nx][ny] == value: 
          arr[nx][ny] = 0
          queue.append((nx, ny)) 

n = int(input())
graph = [list(map(str, input())) for _ in range(n)]
cnt = 0

for i in range(n):
  for j in range(n):
    if graph[i][j] != 0:
      cnt += 1
      bfs(graph, i, j, graph[i][j])

print(cnt)
