import sys
import heapq
input = sys.stdin.readline 
INF = int(1e9)

n,m,x = map(int, input().split())
# n명(노드) # m개의 도로(간선) # x번 마을(도착지점)
graph = [[] for _ in range(n+1)]


for _ in range(m):
  a,b,c = map(int, input().split())
  graph[a].append((b,c))

def dijstra(start):
  q = []
  distance = [INF] * (n+1)
  heapq.heappush(q, (0, start))
  distance[start] = 0 # 거리테이블의 출발노드를 0으로 세팅

  while q:
    dist, now = heapq.heappop(q)
    if distance[now] < dist:
      continue

    for i in graph[now]:
      cost = dist + i[1]
      if cost < distance[i[0]]:
        distance[i[0]] = cost
        heapq.heappush(q, (cost, i[0]))
  return distance

answer = dijstra(x)
answer[0] = 0 # 0번 노드는 처리 안되었으므로 0으로 변경해줌

for i in range(1, n+1):
  if i != x:
    result = dijstra(i)
    answer[i] += result[x]

print(max(answer))


