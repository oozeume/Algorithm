# 발음이 가능한 패스워드 만들기
# 모음 하나 반드시 포함 aeiou
# 모음이 3개 혹은 자음이 3개 연속으로 오면 안된다
# 같은 글자가 연속적으로 두 번 오면 안되고 ee와 oo는 허용

import sys
input = sys.stdin.readline 

vowel = ['a','e', 'i', 'o','u']

def hasVowel(word):
  if word.count('a') > 0 or word.count('e') or word.count('i') or word.count('o') or word.count('u'):
    return True
  else: 
    return False

def check(word):
  result = True

  if len(word) != 1:
    for i in range(len(word)):
      if i+1 < len(word) and word[i] == word[i+1]:
        if word[i] != 'e' and word[i] != 'o':
          result = False
      if i+2 <len(word) and word[i] in vowel and word[i+1] in vowel and word[i+2] in vowel:
        result = False
      if i+2 <len(word) and word[i] not in vowel and word[i+1] not in vowel and word[i+2] not in vowel:
        result = False
    
  return result

while True:
  s = input().strip()
  if s == 'end':
    break

  resultA = hasVowel(s)
  resultB = check(s)

  if resultA and resultB:
    print ('<'+s+'>', 'is acceptable.')
  else:
     print ('<'+s+'>', 'is not acceptable.')





