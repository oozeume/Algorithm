# 크기가 양수이 부분수열 중 원소를 다 더한 값이 s가되는 경우의수
from itertools import combinations

n, s = map(int, input().split())
arr = list(map(int, input().split()))

cnt = 0

for i in range(1, n+1):
  comb = combinations(arr, i)

  for x in comb:
    if sum(x) == s:
      cnt += 1

print(cnt)