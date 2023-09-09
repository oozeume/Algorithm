# 주어진 숫자로 x와 y를 연립방정식으로 계산해서 찾는 문제
a,b,c,d,e,f = map(int, input().split())


for x in range(-999, 999+1):
  for y in range(-999, 999+1):
    if (a*x)+(b*y)== c and (d*x)+(e*y)==f:
      print(x, y)
