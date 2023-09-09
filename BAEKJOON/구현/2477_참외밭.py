import sys
input = sys.stdin.readline 

k = int(input())
arr = [] # 전체 변을 저장할 리스트 초기화 

maxX = int(-1e9)
maxY = int(-1e9)
maxXY= [(0,0), (0,0)] # 가장 큰 두 변과 인덱스 저장할 리스트 초기화 

for i in range(6):
  d,l = map(int, input().split())
  arr.append((d,l)) # 전체 변 리스트 저장

  if i % 2 == 0:
    if l > maxX:
      maxX = l
      maxXY[1] = (i,l)
  else:
    if l > maxY:
      maxY = l
      maxXY[0] = (i,l)

maxArea = maxXY[0][1] * maxXY[1][1]  # 가장 큰 사각형 넓이 구하기
check = [False] * 6

for idx, _ in maxXY:
  for i in idx, (idx + 1) % 6, idx - 1:
    check[i] = True

minSquare = 1
for i in range(6):
  if not check[i]:
    minSquare *= arr[i][1]

print((maxArea-minSquare)*k)