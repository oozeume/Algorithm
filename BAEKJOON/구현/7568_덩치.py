n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

def compare(A, B): # 두개 받아서 비교해주는 함수
  if A[0] < B[0] and A[1] < B[1]:
    # 자기보다 확실하게 큰 경우
    return True
  else:
    return False

answer = []

for i in range(n):
  cnt = 0
  for j in range(n):
    if i != j:
      result = compare(arr[i], arr[j])
      if result == True:
        cnt+=1
  answer.append(cnt+1)    

print(*answer)

