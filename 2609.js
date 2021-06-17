const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        :
        `24 18`
).split(' ');

let Num1 = Number(input[0]);
let Num2 = Number(input[1]);

let smallNum; 
let bigNum; 

if (Num2 > Num1) {
    smallNum = Num1;
    bigNum = Num2;
} else {
    smallNum = Num2;
    bigNum = Num1;
}

while (bigNum % smallNum !== 0) {
    let rest = bigNum % smallNum;
    if (rest !== 0) {
        bigNum = smallNum;
        smallNum = rest;
    }
}

console.log(smallNum);
console.log(Num1*Num2 / smallNum);
