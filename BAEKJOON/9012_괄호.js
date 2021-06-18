// // 9012_틀린 답

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
    pairOfBracket(input[i]);
}

function pairOfBracket(bracket) {
    let stack = [];
    let result = "Yes"

    for (let j = 0; j < bracket.length; j++) {
        if (bracket[j] === '(') {
            stack.push(1);
        } else {
            if (!stack.pop()) {
                result = "NO";
            }
        }
    }
    if(stack.length!==0) {
        result = "NO";
    }
    console.log(result);
}

