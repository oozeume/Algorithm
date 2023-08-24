arr = list(map(int, input().split()))
list = [1,1,2,2,2,8]
answer = []
for i in range(len(list)):
  value = 0
  if list[i] != arr[i]:
    value = list[i] - arr[i]
  answer.append(value)
print(*answer)  

