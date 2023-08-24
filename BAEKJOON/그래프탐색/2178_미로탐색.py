from collections import deque

n, m = map(int, input().split())
graph = [list(map(int, input())) for _ in range(n)]

# 이동할 네가지 방향 정의(상하좌우)
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(x, y):
  queue = deque()
  queue.append((x,y))

  while queue:
    x, y = queue.popleft()
    # 현재 위치에서 4가지 방향으로 위치 확인
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      
      # 여기가 조건부였음
      if 0 <= nx < n and 0 <= ny < m and graph[nx][ny] == 1:
        queue.append((nx, ny))
        graph[nx][ny] = graph[x][y] + 1
  return graph[n-1][m-1]

print(bfs(0,0))

# bfs 적용하는거는 기본 코드 배껴서 알겠음
# 여기서 문제는 최종 목적지 좌표가 주어졌을 때
# 조건을 어디다 줘야할지 모르겠는 것
# 조건을 어디다 줘야 내가 원하는 지점까지의 최소 칸 수를 구할지




