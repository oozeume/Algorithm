from collections import deque

def dfs(v):
  dfsResult.append(v)
  visited1[v] = True

  for i in graph[v]:
    if not visited1[i]:
      dfs(i)

def bfs(v):
  queue = deque([v])

  queue.append(v)
  bfsResult.append(v)
  visited2[v] = True

  while queue:
    v = queue.popleft()
    for i in graph[v]:
        if not visited2[i]:
          queue.append(i)
          bfsResult.append(i)
          visited2[i] = True

n, m, v = map(int, input().split())

graph = [[] for _ in range(n+1)]
for _ in range(1, m+1):
  s, e = map(int, input().split())
  graph[s].append(e)
  graph[e].append(s)

for i in range(1, n+1):
  graph[i].sort()

visited1 = [False] * (n+1)
dfsResult = []
dfs(v)

visited2 = [False] * (n+1)
bfsResult = []
bfs(v)

print(*dfsResult)
print(*bfsResult)
