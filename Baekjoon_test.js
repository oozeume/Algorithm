// vscode에서 백준 코드 결과값 확인할 수 있고, 변수할당을 쉽게 할 수 있는 방법
const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : // 예제 입력부분 (예제와 똑같이 입력!)
      `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
`
).split('\n');