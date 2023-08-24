from collections import deque

n, m = map(int, input().split()) # n:섬의 개수 m:간선 개수
graph = [[] for _ in range(n+1)] # 그래프를 만든다
for i in range(m):
  a, b, c = map(int, input().split()) # a:섬 b:섬 c:a섬과b섬 사이의 중량제한
  graph[a].append((b, c))
  graph[b].append((a, c))

start, end = map(int, input().split()) # 시작지점 start와 도착지점 map을 입력받는다
left, right = 0, int(10**9) # 중량 조건은 (1 ≤ C ≤ 1,000,000,000) 로 주어졌으므로 각 최솟값과 최댓값으로 지정한다
# 최대 중량을 찾기 위해 최솟값과 최댓값을 범위의 양 끝값으로 설정한다

def bfs(mid): # 이분탐색으로 들어온 중량으로 시작지점에서 도착지점까지 이동이 가능한지 확인한다
  q = deque()
  q.append(start)
  visited[start] = True
  
  while q:
    now = q.popleft()
    if now == end:
      return True

    for node, cost in graph[now]:
      if not visited[node] and mid <= cost:
        q.append(node)
        visited[node] = True

  return False

answer = 0
while left <= right: # 이분탐색 구문
  mid = (left+right) // 2 # 중간값
  visited = [False for _ in range(n + 1)] # bfs에서 사용할 방문 여부를 저장하는 리스트

  if bfs(mid): # 중간값으로 시작지점에서 도착지점까지 수행이 가능한 경우에만
    answer = max(answer, mid)
    left = mid + 1
  else:
    right = mid - 1

print(answer)