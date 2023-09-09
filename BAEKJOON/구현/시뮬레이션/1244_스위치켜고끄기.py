import sys
input = sys.stdin.readline 

n = int(input())
switch = list(map(int, input().split()))

m = int(input()) # 학생수

def changeNum(num):
  if switch[num]==0:
    switch[num] = 1
  else:
    switch[num] = 0

for _ in range(m):
  gender, num = map(int, input().split())
  # 남학생
  if gender == 1: 
    for i in range(len(switch)):
      if switch[i] % num == 0:
        changeNum(i)

  # 여학생    
  if gender == 2: 
    if switch[num-1] == switch[num+1]:
      # 본인 양끝이 대칭이면
      # 대칭이 끝날 때까지 반복적으로 대칭을 찾아가야함
      for k in range(n//2):
        if num+k > n or num-k < 1:
          break 
        if switch[num+k] == switch[num-k]:
          changeNum(num+k)
          changeNum(num-k)
        else:
          break
    else:
      changeNum(i)

print(switch)