import sys
from collections import deque
input = sys.stdin.readline 

m, n = map(int, input().split())
graph = []
for i in range(n):
  graph.append(list(map(int, input().rstrip())))
distance = [[-1] * m for _ in range(n)]

def bfs(x, y):
  q = deque()
  q.append((x, y))
  distance[x][y] = 0

  dx = [1,-1,0,0]
  dy = [0,0,-1,1]

  while q:
    ci, cj = q.popleft()
    for i in range(4):
      nx = ci+dx[i]
      ny = cj+dy[i]

      if 0 <= nx < n and 0 <= ny < m:
        if distance[nx][ny] == -1:
          if graph[nx][ny] == 0:
            distance[nx][ny] = distance[ci][cj]
            q.appendleft((nx, ny))
          else:
            distance[nx][ny] = distance[x][y] +1
            q.append((nx, ny))

bfs(0,0)
print(distance[n-1][m-1])