const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        :
        `5
1
3
8
-2
2`
).trim().split("\n").map(Number);

let N = input.shift();
let numArr = input.sort((a, b) => a - b).map(Number);

// 산술평균 : N개의 수들의 합을 N으로 나눈 값
let average = Math.round(numArr.reduce((acc, cur, i) => {
    return i === numArr.length - 1 ? (acc + cur) / numArr.length : acc + cur;
}));

// 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
let middle = numArr[parseInt(numArr.length / 2)];


// 최빈값 : N개의 수들 중 가장 많이 나타나는 값
const modeMap = new Map();

for (let i = 0; i < numArr.length; i++) {
    if (modeMap.has(numArr[i])) {
        modeMap.set(numArr[i], modeMap.get(numArr[i]) + 1);
    } else {
        modeMap.set(numArr[i], 1);
    }
}

let maxNum = [];
let maxCount = 0;

for (let key of modeMap.keys()) {
    if (modeMap.get(key) > maxCount) {
        maxNum = [key];
        maxCount = modeMap.get(key);
    } else if (modeMap.get(key) === maxCount) {
        maxNum.push(key)
    }
}

let mode = maxNum.length > 1 ? maxNum.sort((a, b) => a - b)[1]: maxNum[0];

// 범위 : N개의 수들 중 최댓값과 최솟값의 차이
let range = numArr[N - 1] - numArr[0];

console.log(average);
console.log(middle);
console.log(mode);
console.log(range);

