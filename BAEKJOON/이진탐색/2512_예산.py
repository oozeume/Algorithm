import sys
input = sys.stdin.readline 
n = int(input())
arr = list(map(int, input().split()))
m = int(input())

result = 0

s = 0
e = max(arr)

if sum(arr) <= m:
  result = max(arr)
else:
  while s <= e:
    mid = (s+e) // 2

    _sum = 0 

    for i in range(n):
      if arr[i] <= mid:
        _sum += arr[i]
      else:
        _sum += mid
    
    if _sum > m:
      e = mid - 1 
    else:
      s = mid + 1
    
      result = mid

print(result)
  


