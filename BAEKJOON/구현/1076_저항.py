colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
val = ''
multiple = 0

for i in range(3):
  color = input()
  idx = colors.index(color)
  if i == 2:
    if idx == 0:
      multiple = 1
    else:
      multiple = 10 ** idx
  else: 
    val += str(idx)

print(int(val) * multiple)