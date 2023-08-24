import sys
sys.setrecursionlimit(10**9)

inputNum = int(input())
cnt = 0

n = inputNum
while True:
  cnt += 1

  newNum = n % 10 +  n // 10
  nextLeftNewNum = n % 10
  nextRightNewNum = newNum % 10 

  n = int(str(nextLeftNewNum)+str(nextRightNewNum))

  if inputNum == n:
    break

print(cnt)