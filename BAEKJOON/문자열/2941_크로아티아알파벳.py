arr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

s = input()
cnt = 0
i = 0

while True:
  if i == len(s):
    break

  if i+1 < len(s) and arr.count(s[i]+s[i+1]) > 0:
    cnt += 1
    i += 2
  elif i+2 < len(s) and arr.count(s[i]+s[i+1]+s[i+2]) > 0:
    cnt += 1
    i += 3
  else:
    i+=1
    cnt+=1

print(cnt)