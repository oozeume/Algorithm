k, n = map(int, input().split())
arr = []
for i in range(k):
  a = int(input())
  arr.append(a)

def binarySearch(s, e):
  while s <= e:
    mid = (s+e) // 2
    
    cnt = 0
    for x in arr:
      value = x // mid
      cnt += value
    
    if cnt < n:
      e = mid - 1
    else:
      s = mid + 1
      

  return e

print(binarySearch(1, max(arr)))