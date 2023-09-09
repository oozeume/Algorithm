s = input()

count0 = 0 # 0으로 바꾸는 개수
count1 = 0 # 1로 바꾸는 개수 

# 첫 번째 원소에 대한 처리
if s[0] == '0':
  count0 += 1
else:
  count1 += 1

# 두 번째 원소부터 확인
for i in range(1, len(s)):
  if s[i] != s[i-1]:
    if s[i] == '0':
      count0 += 1
    else:
      count1 += 1

print(min(count0, count1))
