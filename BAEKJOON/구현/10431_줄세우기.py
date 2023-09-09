import sys
input = sys.stdin.readline
n = int(input())

for j in range(n):
  arr = list(map(int, input().split()))
  del arr[0]

  cnt = 0
  result = [0] * 20
  
  for i in range(len(arr)):
    if i > 0 and arr[i-1] > arr[i]: # 현재보다 앞의 요소가 더 클때
      cnt+=20-i+1
      x = arr[i]
      del arr[i]
      for k in range(i):
        if x < arr[k]:
          arr[k-1] = x
    else: #정렬된 경우
      result[i] = arr[i]

  print(result)
      

  print(j+1, abs(cnt))