const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : // 예제 입력부분 (예제와 똑같이 입력!)
        `10
1
3
5
4
0
0
7
0
0
6`
).split(' ');

console.log(input);