const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `1
10
13
100
1000
10000
100000
0`
).split('\n').map((num) => parseInt(num));

const max = 123456 * 2;
const arr = Array(max + 1).fill(true);
arr[0] = false;
arr[1] = false;

for (let i = 2; i <= max; i++) {
    if (arr[i]) {
        for (let j = i * i; j <= max; j += i) {
            arr[j] = false;
        }
    }
}
// 여기까지 배열판을 만들어 놓는 작업

for (let i = 2; i <= max; i++) {
    if (arr[i]) {
        for (let j = i * i; j <= max; j += i) {
            arr[j] = false;
        }
    }
}

for (let i = 0; i <= input.length; i++) {
    if (arr[i] === 0) break;
    getPrimeNum(input(i))
}

// primeNum의  개수를 찾아주는 함수
function getPrimeNum(num){
    let count = 0;
    for(let i = num+1; i<=num*2; i++){
        if(array[i] === true) count++;
        
    }
    console.log(count);
}
