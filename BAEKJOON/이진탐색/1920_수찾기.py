n = int(input())
arr = sorted(list(map(int, input().split())))
m = int(input())
arr2 = list(map(int, input().split()))

def binarySearch(arr, target, start, end):
  s = start
  e = end

  while s <= e:
    mid = (s+e) // 2

    if arr[mid] == target:
      return 1
    elif arr[mid] > target:
      e = mid - 1
    else:
      s = mid + 1
  return 0

for x in arr2:
  print(binarySearch(arr,x, 0, n-1))



