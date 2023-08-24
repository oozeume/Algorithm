import sys
input = sys.stdin.readline 

# dfs로 가능한 모든 경우 탐색하는 방법
def dfs (num, lst):
  # 종료조건 처리 + 정답일 경우 정답 처리
  if num == m: # m개의 수열을 완성한 경우
    answer.append(lst)
    return
  
  # 하부 단계 호출
  for j in range(1, n+1):
    if visited[j] == False: # 선택하지 않은 경우에
      visited[j] = True
      dfs(num+1, lst+[j])
      visited[j] = False

n, m = map(int, input().split())
visited = [False] * (n+1) # 방문처리를 위한 배열 초기화
answer = []

dfs(0, [])
for lst in answer:
  print(*lst)

# 가능한 모든 경우 -> 트리 형태로 나타날 수 있다