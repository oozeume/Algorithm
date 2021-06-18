// 9012_맞은 답

const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        :
        `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`
).split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
    let arr = input[i];
    let stack = [];
    let result = 'YES'
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === "(") {
            stack.push(1)
        } else {
            if (!stack.pop()) {
                result = 'NO'
            }
        }
    }
    if (stack.length !== 0) {
        result = 'NO'
    }
    console.log(result)
}