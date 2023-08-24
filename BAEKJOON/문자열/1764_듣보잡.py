n, m = map(int, input().split())

arr1 = set()
for _ in range(n):
  arr1.add(input())
arr2 = set()
for _ in range(m):
  arr2.add(input())

result = sorted(list(arr1 & arr2))

print(len(result))
print(*result, sep="\n")