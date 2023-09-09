import sys
input = sys.stdin.readline 

n = int(input())

line = 1
count = 1

while count + line <= n:
  count += line
  line += 1

if line % 2 !=0:
  a = n-count+1
  b= line-(n-count)
else:
  a = line - (n-count)
  b = n-count+1

print(f"{b}/{a}")


