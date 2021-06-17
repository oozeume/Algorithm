// let fs = require("fs");
// let [min, max] = fs.readFileSync("/dev/stdin").toString().split(" ").map((num) => Number(num));

const min = 3;
const max = 16;

let arr = new Array(max + 1).fill(true);
arr[0] = false;
arr[1] = false;

for (let i = 2; i <= max; i++) { // for문으로 2부터 배수를 false시켜주기 시작
    if (arr[i]) {
        for (let j = i * i; j <= max; j += i) {
            arr[j] = false;
        }
    }
}

for (let i = min; i <= max; i++) {
    arr[i] === true ? console.log(i) : null;
}