# 안정적인 문자열 만드는데 최소 연산 수 리턴
# 여는 괄호 -> 닫는 괄호 , 닫는 괄호 -> 여는 괄호 (연산 2가지)

answer = []

while True:
  stack = []
  cnt= 0

  s = input()

  if '-' in s:
    break


  for i in range(len(s)):
    if not stack and s[i] == '}':
      cnt +=1
      stack.append('{')
    elif stack and s[i] == '}':
      stack.pop()
    else:
      stack.append(s[i])
  
  cnt += len(stack) // 2
  answer.append(cnt)


for i in range(len(answer)):
  print(i+1, '. ', answer[i], sep="")
  