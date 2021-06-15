const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        :
        `4
2 3 4 6
`).split('\n');//\n으로 구분하기 때문에 input[0]에 첫줄 숫자, input[1]에 2 3 4 6이 담김

let numbers = input[1].split(' ').map(Number);
// number만 들어있는 배열로 만들어준다.

let maxNum = Math.max.apply(null, numbers);
let minNum = Math.min.apply(null, numbers);

console.log(maxNum * minNum);
