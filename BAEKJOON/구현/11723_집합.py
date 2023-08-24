import sys 
input = sys.stdin.readline

m = int(input())
s = []

for _ in range(m):
  inputValue = input().split()
  a = inputValue[0]
  b = 0
  if len(inputValue) != 1:
    b = inputValue[1]
    b = int(b)

  b = int(b)
  if a == 'add':
    if s.count(b) == 0:
      s.append(b)
  elif a == 'check':
    if s.count(b) > 0:
      print(1)
    else:
      print(0)
  elif a == 'remove':
    if s.count(b) > 0:
      idx = s.index(b)
      del s[idx]
    
  elif a == 'toggle':
    if s.count(b) == 0:
      s.append(b)
    else:
      idx = s.index(b)
      del s[idx]
  elif a == 'all':
    s = []
    for i in range(1, 21):
      s.append(i)
  elif a == 'empty':
    s = []