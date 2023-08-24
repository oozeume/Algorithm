n = int(input())
arr = [input() for _ in range(n)]

def groupCheaker(word):
  # 단일문자이면 바로 True 리턴
  if len(word) == 1:
    return True
  else:
    # 배열로 만들어서
    a = list(word)
    for i in range(len(a)):
      # 마지막 요소가 아니고, 현재요소 다음 요소랑 다른 경우 중에
      if i != len(a)-1 and a[i] != a[i+1]:
        # 현재 요소 다음부터 자른 문자열에서 현재 요소 가지고 있다면 False 리턴
        if a[i+1:].count(a[i]) != 0: 
          return False
  return True

cnt = 0
for x in arr:
  # 그룹체커 함수가 True일때만 카운팅
  result = groupCheaker(x)
  if result:
    cnt += 1

# 결과 출력
print(cnt)

  
