import sys
sys.setrecursionlimit(int(1e9))
n,m = map(int, input().split()) # n: 카듸 개수, m: 카드의 합이 넘지말아야할 수
cards = list(map(int, input().split()))


# 중복 없는 조합 && m 을 넘지 않는 수
# 조합 DFS -> 재귀가 가능한 조건인지
# 카드 개수가 3이상 100이하
# 최대 100*100 = 10000
# 재귀함수의 시간복잡도는?

r = 3 # 뽑을 개수
result = [0] * r

answer = []

def DFS(depth, beginWith):
  if depth == r:
    if sum(result) <= m:
      answer.append(sum(result))
  else:
    for i in range(beginWith, len(cards)):
      result[depth] = cards[i]
      DFS(depth+1, i+1)

DFS(0,0)
print(max(answer))