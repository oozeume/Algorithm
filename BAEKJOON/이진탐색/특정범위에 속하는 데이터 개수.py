from bisect import bisect_left, bisect_right

def countByRange(arr, left, right):
  rightIndex = bisect_right(arr, right)
  leftIndex = bisect_left(arr, left)
  
  return rightIndex - leftIndex

arr = [1,2,3,3,3,3,4,4,8,9]

# 배열 내 값이 4인 데이터의 개수 출력
print(countByRange(arr, 4, 4))

# 값이 [-1, 3] 범위에 있는 데이터 개수 출력
# 값이 -1 이상 3이하인 데이터의 개수 
print(countByRange(arr, -1, 3))