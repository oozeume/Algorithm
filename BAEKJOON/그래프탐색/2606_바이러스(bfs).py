# 하나 바이러스 걸리면 연결되어있으면 다 바이러스
from collections import deque
n = int(input()) # 컴퓨터의 수
# 컴퓨터는 1번부터 n번까지 차례로 번호가 매겨진다
m = int(input()) # 간선 수

graph = [[] for _ in range(n+1)]
for i in range(m): # 인접리스트 만들기
  a, b= map(int, input().split())
  graph[a].append(b)
  graph[b].append(a)

# 1번 바이러스와 연결되어있는 모든 컴퓨터의 수 고르기

visited = [False] * (n+1)

def BFS(vertax):
  q = deque()
  q.append(vertax)
  visited[vertax] = True

  cnt = 0

  while q:
    v = q.popleft()
    for i in graph[v]:
      if not visited[i]:
        cnt+=1
        q.append(i)
        visited[i] = True

  return cnt

print(BFS(1))

