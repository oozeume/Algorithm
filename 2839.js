const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : // 예제 입력부분 (예제와 똑같이 입력!)
        `3`
).split('\n');

let result = -1;
let five = Math.floor(input / 5);

while (five >= 0) {
    const remain = input - five * 5;
    if (remain % 3 === 0) {
        result = remain / 3 + five;
        break;
    } else {
        five -= 1;
    }
}

console.log(result);













