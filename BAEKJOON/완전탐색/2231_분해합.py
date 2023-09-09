# 분해합 : n, n을 이루는 각 자리수의 합
# 자연수 m의 분해합이 n인 경우 -> m을 n의 생성자

n = int(input())

i = n-1

def check(num): # 분해합이 되는지 확인하는 함수
  a = list(str(num))
  result = num
  for i in range(len(a)):
    result += int(a[i])
  if result == n:
    return True
  else:
    return False

answer = 0

while i > 0:
  if check(n-i):
    answer=n-i
    break
  else:
    i -= 1

print(answer)
