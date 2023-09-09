# 일곱난쟁이 키의 합 100
# 9명이 주어짐
# 9개 중에 7개 조합해서 100이되는경우

from itertools import combinations

heights = [int(input()) for _ in range(9)]
sevenList = list(combinations(heights, 7))

answer = []
for i in sevenList:
  if sum(i) == 100:
    answer = i
    break

answer = sorted(answer)
print(*answer, sep="\n")