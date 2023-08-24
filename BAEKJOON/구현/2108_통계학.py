import sys
input = sys.stdin.readline
from collections import Counter

N = int(input())
arr = [int(input()) for _ in range(N)]

print(int(round(sum(arr) / len(arr), 0)))

arr2 = sorted(arr)
idx = len(arr2) // 2

print(arr2[idx])

numCounts = Counter(arr2)
cnt = numCounts.most_common()

if len(cnt) > 1 and cnt[0][1] == cnt[1][1]:
  print(cnt[1][0])
else:
  print(cnt[0][0])

maxNum = max(arr)
minNum = min(arr)

print(maxNum - minNum)