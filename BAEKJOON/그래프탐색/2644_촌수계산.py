# 시작하는 값 a에서 부터 target까지 재귀적으로 dfs 실행
def dfs(cur, target, depth):
  if cur == target: # b 지점까지 도달을 했으면 종료
    return depth

  visited[cur] = True

  for nxt in graph[cur]: # 현재 노드의 주변 요소 탐색
    if not visited[nxt]: # cur의 주변노드인 nxt에 방문하지 않았으면
      result = dfs(nxt, target, depth+1) # 재귀적으로 dfs 실행
      if result != -1: # dfs재귀 끝났을 때 result가 -1이 아니면
        return result
  
  return -1

n = int(input()) # 사람수 (노드 수)
a, b = map(int, input().split()) # 사람 a, b의 촌수가 타겟
m = int(input()) # 간선 수를 나타냄

graph = [[] for _ in range(n+1)] # 인접리스트를 담을 그래프

for i in range(m):
  x, y = map(int, input().split())
  graph[x].append(y)
  graph[y].append(x)

visited = [False] * (n+1) # 방문처리를 위한 배열 초기화
result = dfs(a, b, 0) # a를 기준으로 b까지 가는데 depth가 몇개를 거쳐가는지 기록할예정
print(result)