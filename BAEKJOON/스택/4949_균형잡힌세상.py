stack = []
while True:
  string = input()

  if string == '.':
    break
  
  result = 'yes'

  for x in string:
    if x == '(' or x == '[':
      stack.append(x)
    if x == ')' or x == ']':
      if len(stack) == 0:
        result = 'no'
        break
      else:
        y = stack.pop()
        if x == ')':
          if y != '(':
            result = 'no'
            break
        if x == ']':
          if y != '[':
            result = 'no'
            break

  if stack != []:
    result = 'no'
  print(result)
  stack = []

      