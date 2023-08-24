from collections import deque

T = int(input())
answer = []

for i in range(T):
  m, n, k = map(int, input().split())

  # 땅만들기
  arr = [[0] * m for _ in range(n)]
  visited = [[False] * (m+1) for _ in range(n+1)]
  # 배추심기
  for _ in range(k):
    a, b = map(int, input().split())
    arr[b][a] = 1

  def bfs(x, y):
    q = deque()
    q.append((x, y))
    visited[x][y] = True
    cnt = 1

    dx = [1,-1,0,0]
    dy = [0,0,-1,1]

    while q:
      ci, cj = q.popleft()
      for i in range(4):
        nx = ci + dx[i]
        ny = cj + dy[i]

        if nx < 0 or nx >= n or ny <0 or ny >= m or arr[nx][ny] == 0 or visited[nx][ny] == True:
          continue
        q.append((nx, ny))
        visited[nx][ny] = True
        cnt += 1
    return cnt

  result2 = []

  for i in range(n):
    for j in range(m):
      if arr[i][j] == 0 or visited[i][j] == True:
        continue
      else:
        result = bfs(i, j)
        result2.append(result)
  answer.append(len(result2))

for i in range(T):
  print(answer[i])







  

      