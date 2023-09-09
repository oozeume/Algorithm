# 터널 내부에서의 추월 부가능
# 추월했을것으로 여겨지는 차는 몇대인가
# 1,2,3,4 로 들어갔으면 1,2,3,4로 나와야지

n = int(input()) # 차 대수
enter = [input() for _ in range(n)] # 들어간 순서
out = [input() for _ in range(n)] # 나오는 순서

answer = 0

dic = dict() # [들어간순서, 나온순서]

for i in range(n):
  dic[enter[i]] = [i+1, 0]

for i in range(n):
  dic[out[i]][1] = i+1

# 나온순서대로 정렬
arr = sorted(dic.values(), key=lambda x: x[1])

# 본인 기준으로 자기 뒤에 하나라도 인덱스가 더 높은 차가 있으면 추월한것이므로 +1
for i in range(len(arr)-1):
  for j in range(i+1, len(arr)):
    if arr[i][0] > arr[j][0]:
      answer += 1
      break

print(answer)