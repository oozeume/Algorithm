# 문제 이해
# 8*8 체스판으로 잘라야함
# 검은색과 흰색이 번갈아 칠하고 - 변을 공유하는 사각형은 각각 다른색이어야한다.
# 다시 칠해야하는 정사각형 최소 개수 출력

import sys
import copy
n, m = map(int, input().split())
board = [list(input()) for _ in range(n)]

result = []

def check(startX, endX, startY, endY):
  countW = 0
  countB = 0

  for x in range(startX, endX):
    for y in range(startY, endY):
      # 짝수칸
      if (x+y) % 2 == 0:
        if board[x][y] != 'W':
          countW +=1
        if board[x][y] != 'B':
          countB += 1
      # 홀수칸
      else:
        if board[x][y] != 'B':
          countW += 1
        if board[x][y] != 'W':
          countB += 1
  result.append(countW)
  result.append(countB)


# n=10 경우, i 가 가능한 범위 (0~8)(1~9)(2~10)
# m=13 경우, j 가 가능한 범위 (0~8)(1~9)(2~10)(3~11)(4~12)(5~13)
# 범위를 조합을 잘 만들어서 check함수로 넘겨야함

for i in range(n-8+1):
  for j in range(m-8+1):
    check(i, i+8, j, j+8)

print(min(result))

