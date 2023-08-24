n = int(input())
arr = [input() for _ in range(n)]

# 입력으로 들어온 예제를 통해서 유추
# 그 조건에 맞는 결과 출력

value = arr[0]

for i in range(1, n+1):
  v = ''
  for j in range(len(arr[i])):
    # value랑 하나씩 비교하면서
    if value[j] == arr[i][j]