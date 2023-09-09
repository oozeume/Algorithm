import sys
input = sys.stdin.readline

n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

# 종이를 잘랐을 때 -1로만 채워진 종이 개수, 0로만 채워진 종이 개수, 1로만 채워진 종이 개수 구하기

answer = [0,0,0]

def DFS(x, y, z): 
  global answer
  visited = arr[x][y] # 시작지점

  for i in range(x, x+z):
    for j in range(y, y+z):
      if arr[i][j] != visited:
        for k in range(3):
          for l in range(3):
            DFS(x+k*z // 3, y+l*z//3, z//3)
        return 
  
  if visited == -1:
    answer[0] += 1
  elif visited == 0:
    answer[1] += 1
  else:
    answer[2] += 1

DFS(0, 0, n)

for i in answer:
  print(i)