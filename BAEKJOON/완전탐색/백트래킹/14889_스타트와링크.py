import sys
input = sys.stdin.readline 

n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

# n개의 노드로 n자리의 중복 제거된 조합을 모두 만들어서 계산 후 그 중 최솟값만 리턴

visited = [False] * (n+1)
answer = []

def dfs(depth):
  if depth == n // 2: # 종료조건
    power1 = 0
    power2 = 0
    for i in range(n):
      for j in range(n):
        if visited[i] == True and visited[j] == True:
          power1 += arr[i][j]
        elif visited[i] == False and visited[j] == False:
          power2 += arr[i][j]
    answer.append(abs(power1-power2))
    return

  for i in range(1, n+1):
    if visited[i] == False:
      visited[i] = True
      dfs(depth+1)
      visited[i] = False

dfs(0)

print(min(answer))