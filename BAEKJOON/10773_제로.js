const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `4
3
0
4
0`
).split('\n');



let stack = [];

for (let i = 1; i < input.length; i++) {
    let num = input[i];
    num !== '0' ? stack.push(Number(input[i])) : stack.pop(Number(input[i-1]));
}

let sum = stack.reduce((a,b)=> a+b, 0);
console.log(sum);
