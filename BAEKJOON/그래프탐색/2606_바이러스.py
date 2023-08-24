n = int(input())
m = int(input())

graph = [[] for _ in range(n+1)]
visited = [[False] * (n+1) for _ in range(n+1)]

for i in range(m):
  a, b = map(int, input().split())
  graph[a].append(b)
  graph[b].append(a)

cnt = 0

def dfs(cur, prv):
  global cnt
  visited[cur] = True # 현재 노드 방문처리

  for nxt in graph[cur]: # 현재 노드의 주변 노드 순회
    if cur == prv or visited[nxt] == True: # 현재 노드가 이전 노드와 같거나(되돌아가는중이거나) 방문했던 지점이라면 
      continue
    cnt += 1 # 하위 노드로 내려갈꺼니까 카운팅
    dfs(nxt, cur) # 하위 노드 탐색
  
dfs(1, -1)
print(cnt)


  
