# 답은 맞는데 시간초과가 있어서 최적화 필요하다
import sys
input = sys.stdin.readline
sys.setrecursionlimit(int(1e9))

n = int(input())
numArr = list(map(int, input().split()))
calcArr = list(map(int, input().split()))
cal=[]

def addCalc(cnt, x):
  for _ in range(cnt):
    cal.append(x)

for i in range(len(calcArr)):
  if i == 0: # +
    if calcArr[i] != 0:
      addCalc(calcArr[i], '+')
  elif i == 1: # -
    if calcArr[i] != 0:
      addCalc(calcArr[i], '-')
  elif i == 2: # x
    if calcArr[i] != 0:
      addCalc(calcArr[i], 'x')
  else:  # %
    if calcArr[i] != 0:
      addCalc(calcArr[i], '%')

answer = []
result = [0] * (n-1)
visited = [False] * (n-1)

maxAnswer = -sys.maxsize
minAnswer = sys.maxsize

def expression(numbers, operations):
  res = numbers[0]

  for i in range(1, len(numbers)):
    if operations[i-1] == '+':
      res += numbers[i]
    elif operations[i-1] == '-':
      res -= numbers[i]
    elif operations[i-1] == 'x':
      res *= numbers[i]
    elif operations[i-1] == '%':
      if res < 0:
        res = abs(res)
      res //= numbers[i]
  return res

def DFS(depth):
  global maxAnswer, minAnswer
  if depth == n-1:
      temp = expression(numArr, result)
      if temp > maxAnswer:
        maxAnswer = temp
      if temp < minAnswer:
        minAnswer = temp
  else:
    for i in range(n-1):
      if not visited[i]:
        visited[i] = True
        result[depth] = cal[i]
        DFS(depth+1)
        visited[i] = False

DFS(0)

print(maxAnswer)
print(minAnswer)
