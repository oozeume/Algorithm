# 사탕의 색이 다른 인접한 두칸 고르고 교환
# 모두 같은 색으로 이루어져있는 가장 킨 부분 행 또는 열 고르고 모두 먹는다
# 상근이가 먹을 수 있는 사타의 최대 개수 구하기

n = int(input()) # 보드의 크기
board = [list(input()) for _ in range(n)]
answer = 0

# 문제 풀이 방식
# 인접요소 교환해서 가로로 연속 부분 수열 개수 체크하고
# 세로로 한 번 더 연속 부분 수열 개수 체크해서
# max 값 추출한다
# 풀이 방식 자체는 괜찮았는데 중간 로직에 문제가 있었던 것 같다

# 개수 체크하는 배열
def check(board):
  maxCnt = 1
  for i in range(n):
    cnt = 1
    for j in range(1, n): # 오른쪽 계산
      if board[i][j] == board[i][j-1]:
        cnt += 1
      else:
        cnt = 1

      maxCnt = max(maxCnt, cnt)
    
    cnt = 1
    for j in range(1, n): # 아래쪽 계산
      if board[j][i] == board[j-1][i]:
        cnt += 1
      else:
        cnt = 1

      maxCnt = max(maxCnt, cnt)
  return maxCnt

# 완전탐색하면서 가로,세로 인접요소 탐색해야함
for i in range(n):
  for j in range(n):
    if j + 1 < n: # 범위 체크
      board[i][j], board[i][j+1] = board[i][j+1], board[i][j] # swap
      cnt = check(board)
      answer = max(answer, cnt)
      # 원래대로 돌리기
      board[i][j], board[i][j+1] = board[i][j+1], board[i][j]
    
    if i+1 < n: # 범위 체크
      board[i][j], board[i+1][j] = board[i+1][j], board[i][j]
      cnt = check(board)
      answer = max(answer, cnt)
      # 원래대로 돌리기
      board[i][j], board[i+1][j] = board[i+1][j], board[i][j]
      
print(answer)
