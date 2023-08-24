d, n, m = map(int, input().split())
arr = []
for i in range(n):
  arr.append(int(input()))
arr.sort()

def binarySearch(target, s, e):
  while s <= e:
    mid = (s+e) // 2

    if target == mid:
      return mid
    elif target < mid:
      e = mid - 1
    else:
      s = mid +1
