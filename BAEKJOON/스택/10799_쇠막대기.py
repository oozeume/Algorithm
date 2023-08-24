import sys
input = sys.stdin.readline 

arr = input()

stack = []
cnt = 0

for i in range(len(arr)):
  if arr[i] == '(': # 열린괄호
    if arr[i+1] == ')': # 레이저 일떄
        cnt += len(stack)
    else:
      stack.append(arr[i])
  else:  # 닫힌괄호
    if arr[i-1] == '(':
      continue
    else: 
      if len(stack) != 0:
        stack.pop()
        cnt += 1

print(cnt)