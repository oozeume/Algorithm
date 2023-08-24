import sys
sys.setrecursionlimit(10**6)

n = int(input())
visited=[False] * (n+1)
tree = [[] for _ in range(n+1)]
answer = [0] * (n+1)

for _ in range(1, n):
  a, b = map(int, input().split())
  tree[a].append(b)
  tree[b].append(a)

def dfs(number):
  visited[number] = True
  for i in tree[number]:
    if not visited[i]:
      answer[i] = number
      dfs(i)

dfs(1)

for i in range(2, n+1):
  print(answer[i])