from itertools import permutations
n = int(input())

arr = []
for i in range(1,n+1):
  arr.append(i)

a = list(permutations(arr))

for i in range(len(a)):
  for j in range(len(a[i])):
    print(a[i][j], end=" ")
  print('')
