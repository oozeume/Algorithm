# 자연수가 주어지면 3개의 삼각수의 합으로 표현될 수 있는지 없는지를 판단
#Tn을 담고있을 배열 각 자기 인덱스가 Tn
# k가 1000개까지 나올 수 있으니까 배열의 길이는 1001로 지정
# import sys
# input = sys.stdin.readline 
# from itertools import combinations
# T = int(input())


# def isCombiNumber(n, tNumbers):
#   arr = []
#   for i in range(1, n):
#     arr.append(i)
#   c = list(combinations(arr, 3))
  
#   answer = False
#   for x in c:
#     cnt=0
#     for j in x:
#       cnt += tNumbers[j]
#     if cnt == n:
#       answer = True
#   return answer

# for _ in range(T):
#   k = int(input())
#   tNumbers = [0] * k

#   sum = 0
#   for i in range(k):
#     sum += i
#     tNumbers[i] = sum # 각자리에 Tn의 결과 대입

#   result = isCombiNumber(k, tNumbers)
#   if result == True:
#     print(1)
#   else:
#     print(0)

import sys
input = sys.stdin.readline

def findNumbers(K):
  numbers = set() # 삼각수를 담을 배열
  n = 1
  while True:
    triangular = n * (n + 1) // 2 # 삼각수를 구하고
    if triangular > K:
      break
    numbers.add(triangular) # 배열에 넣고
    n += 1
  print('->',numbers)
  
  # 주어진 K에 대한 가능한 조합 찾기
  for x in numbers:
    for y in numbers:
      for z in numbers:
        if x + y + z == K:
          print('-->',x,y,z)
          return 1
  
  return 0

T = int(input())

for _ in range(T):
    K = int(input())
    result = findNumbers(K)
    print(result)
  
