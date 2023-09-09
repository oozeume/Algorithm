from collections import deque
import sys
input = sys.stdin.readline 

n, k = map(int, input().split()) # k = 등수 구하고자 하는 나라
arr = [[0,0,0] for _ in range(n+1)]
grade = deque([] for _ in range(n+1)) # 등수를 저장할 배열
     
for i in range(n):
  a,gold,silver,bronze = map(int, input().split())
  sum = gold * 5 + silver * 2 + bronze * 1
  grade[a] = [a, sum]

maxNum = -sys.maxsize
gradeArr = [0] * (n+1)

for i in range(1, n+1):
  cnt=0
  for j in range(1, n+1):
    if i != j:
      if grade[i][1] >= grade[j][1]:
        cnt+=1
  gradeArr[i] = n-cnt

print(gradeArr[k])
  

    
  
      



