while True:
  n = list(map(int, input().split()))

  if len(n) == 1 and n[0] == 0:
    break

  del n[0]

  answer = [0] * 6
  result = []

  def dfs(depth, begin):
    if depth == 6:
      print(*answer)
    else:
      for i in range(begin, len(n)):
        answer[depth] = n[i]
        dfs(depth+1, i+1)
      
  dfs(0,0)
  print('')


   
