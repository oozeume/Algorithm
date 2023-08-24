n, m = map(int, input().split())
arr = list(map(int, input().split()))

def binarySearch(arr, target, start, end):
  result = 0

  while start <= end:
    mid = (start + end) // 2

    total = 0
    for x in arr:
      if x > mid:
        total += x - mid

    if total >= target:
      start = mid + 1
      result = mid
    else:
      end = mid - 1
    
  return result

print(binarySearch(arr, m, 0, max(arr)))