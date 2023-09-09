import sys
input = sys.stdin.readline
sys.setrecursionlimit(int(1e9))
n, m = map(int, input().split())

# 방법 1
answer=[]
def dfs(num, lst):
  if num > n:
    if len(lst) == m:
      print(*lst)
  else:
    dfs(num+1, lst+[num]) # 선택하는 경우
    dfs(num+1, lst) # 선택하지 않는 경우
      
dfs(1, [])

# 방법 2
arr = [0] * n
for i in range(n):
  arr[i] = i+1

result = [0] * m

def DFS(depth, beginWith):
  if depth == m:
    print(*result)
  else:
    for i in range(beginWith, n):
      result[depth] = arr[i]
      DFS(depth+1, i+1)