import sys
input = sys.stdin.readline 

n,m = map(int, input().split())
dic = dict()

for _ in range(n):
  s = input().rstrip()
  if len(s) >= m: # 길이가 m 이상인 문자열만 거른다
    if dic.get(s): # dictionary에 해당 문자열이 있으면
      dic[s][0] += 1 # 카운팅
    else:
      dic[s] = [1, len(s), s] #[빈도수, 문자열 길이, 문자열] 순서대로 저장하기 위한 배열 세팅

answer = sorted(dic.values(), key=lambda x: (-x[0], -x[1], x[2]))

for x in answer:
  print(x[2])



