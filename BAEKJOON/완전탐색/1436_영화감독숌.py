# 종말의 수 -> 6이 3개이상 연속으로 들어가는 수
# 666, 1666, 2666 ...
# n번째 영화의 제목 -> n번째로 작은 종말의 수
n = int(input())

num = 666
count = 0

# 숫자에 666이 연속으로 들어있는지
def check(number):
  s = list(str(number))
  result = False
  for i in range(len(s)-2):
    if s[i] == '6' and s[i+1] == '6'and s[i+2]== '6':
      result = True
  return result

# 1씩 증가시키면서 666이 들어가는지 계산, 이전 숫자보다 작은지 계산
while True:
  if check(num):
    count+=1
  if count == n:
    break
  num+=1
    
print(num)

