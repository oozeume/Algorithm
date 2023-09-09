# 나무의 분포도 측정
# 이름 사전순 출력, 차지비율 소수점 4째자리까지 반올림해서 출력

import sys
input = sys.stdin.readline 
from collections import defaultdict
arr = dict()
totalCnt = 0

while True:
  tree = input().rstrip()
  if tree == '':
    break

  totalCnt += 1
  if tree in arr:
    arr[tree] += 1
  else:
    arr[tree] = 1

for k,v in sorted(arr.items()):
  ratio = round(v/totalCnt * 100, 4)
  print('%s %.4f' % (k,ratio))