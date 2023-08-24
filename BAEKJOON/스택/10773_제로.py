import sys
input = sys.stdin.readline

k = int(input())

arr = []

for _ in range(k):
  x = int(input())
  if x != 0:
    arr.append(x)
  else:
    arr.pop()

print(sum(arr))