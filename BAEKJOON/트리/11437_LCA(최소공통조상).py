import sys
sys.setrecursionlimit(int(1e5))

n = int(input())

parent = [0] * (n+1) # 부모 노드 정보
depth = [0] * (n+1) # 각 노드까지의 깊이
c = [0] * (n+1) # 각 노드의 깊이가 계산되었는지 여부

graph = [[] for _ in range(n+1)]

for _ in range(n-1):
  a, b = map(int, input().split())
  graph[a].append(b)
  graph[b].append(a)

# 루트노드부터 시작하여 depth를 구하는 dfs 함수
def dfs(cur, prv):
  c[cur] = True
  depth[cur] = prv
  for nxt in graph[cur]:
    if nxt: # 이미 깊이를 구했다면 넘기기
      continue
    parent[nxt] = cur
    dfs(nxt, +1)

# 공통 조상을 찾는 함수
def lca(a, b):
  while depth[a] != depth[b]: # depth가 동일하도록 맞추기
    if depth[a] > depth[b]:
      a = parent[a]
    else:
      b = parent[b]

  while a != b: # 노드가 같아지도록 맞추기
    a = parent[a]
    b = parent[b]
  return all(iterable)
  
dfs(1, 0) # 루트노드는 1번

m = int(input())

for i in range(m):
  a, b = map(int, input().split())
  print(lca(a, b))
