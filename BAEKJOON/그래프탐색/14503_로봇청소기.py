from collections import deque
n, m = map(int, input().split())
r, c, direction = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

# direction은 0,1,2,3 중 하나 (위, 우, 아래, 좌)

visited = [[False] * m for _ in range(n)]

def bfs(x, y, d):
  
  visited[x][y] = True # 시작지점 방문처리
  cnt = 1 # 시작지점 카운팅

  dx=[-1,0, 1, 0] #왼쪽 시계방향으로 세팅함
  dy=[0,-1,0, 1]

  while True:
    flag = 0 # 청소 안함
    for _ in range(4): # 현재 위치에서 4방향 탐색
      d = (d+3) % 4
      nx = x + dx[d]
      ny = y + dy[d]

      # 조건 -> 범위 안에 들 것, 빈칸 일 것, 청소할 수 있을 것
      if 0 <= nx < n and 0 <= ny < m and arr[nx][ny] == 0:
        # 범위 안에 드는 경우 에서
        if visited[nx][ny] == False: # 방문하지 않은 곳인경우
          visited[nx][ny] = True # 방문처리
          cnt += 1 # 카운팅
          x = nx
          y = ny
          flag = 1 # 청소 했다는 뜻
          break

    if flag == 0: # for문 4방향 탐색 모두 실패한 경우(청소할 수 없는 경우)
      # 후진처리
      # 후진했을 때 벽이면 break
      # 벽이 아니면 현재 위치 갱신
      if arr[x - dx[d]][y - dy[d]] == 1:
        print(cnt)
        break
      else:
        x, y = x - dx[d], y - dy[d]

  return cnt

bfs(r, c, direction)