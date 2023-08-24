import sys
input = sys.stdin.readline 

n = list(input().strip())

for i in range(len(n)):
  if n[i] == '9':
    n[i] = '6'

cnt= [0] * 9 # 카운팅 배열

for x in n:
  cnt[int(x)] += 1

cnt[6] = (cnt[6]+1) // 2

print(max(cnt))