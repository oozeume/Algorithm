import sys
input = sys.stdin.readline 
import heapq
INF = int(1e9)

n, d = map(int, input().split()) # 도착지점이 d
# 각 노드를 뭐라고 잡아야할까?
graph = [[] for _ in range(10000 + 1)] # 지름길 정보 세팅
distance = [INF] * (d+1)

for _ in range(n):
  a,b,c = map(int, input().split())
  graph[a].append((b,c))

def dijkstra(start):
  q = []

  heapq.heappush(q, (0, start))
  distance[start] = 0

  while q:
    dist, now = heapq.heappop(q)
    if distance[now] < dist:
      continue
      
    for i in graph[now]:
      cost = dist + i[1]
      if cost < distance[i[0]]:
        distance[i[0]] = cost
        heapq.heappush(q, (cost, i[0]))

dijkstra(0)

