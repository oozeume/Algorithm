# S -> 부분복사 -> P
# copy연산을 최소 사용 횟수
S = input()
P = input()

# P에서 연속으로 copy 가능한 문자열 있는지 확인
# 개수 확인하면서 제거
# 남은 나머지 문자열의 길이 개수로 추가

partial = [] # 부분 분자열 저장

for i in range(len(P)):
  for j in range(len(S)):
    if P[i] == S[j]: # 탐색하다가 같은게 나오면
      # 다른게 나올때까지 증가하면서 비교
      cnt = 1
      while True:
        if P[i+cnt] == S[j+cnt]:
          cnt+=1
        else:
          partial.append([i, i+cnt])
          break


  