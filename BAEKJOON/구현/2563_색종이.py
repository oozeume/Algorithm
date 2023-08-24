import sys
input = sys.stdin.readline 
sys.setrecursionlimit(int(1e9))

n = int(input())
graph = [[0] * 101 for _ in range(101)]

for _ in range(n):
  a,b = map(int, input().split())

  for i in range(a, a+10):
    for j in range(b, b+10):
        graph[i][j] += 1 # 색종이 범위 안에 들면 카운팅하기

answer = 0

for i in range(len(graph)):
  for j in range(len(graph[i])):
    if graph[i][j] > 0:
      answer+=1

print(answer)