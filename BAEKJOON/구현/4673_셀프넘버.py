arr = []
for i in range(1,10000):
  a = list(str(i))
  temp = 0
  temp += i
  for j in range(len(a)):
    temp += int(a[j])
  arr.append(temp)

for i in range(1, 10000):
  if arr.count(i) == 0:
    print(i)
  