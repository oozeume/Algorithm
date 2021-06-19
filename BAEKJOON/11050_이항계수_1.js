// 팩토리얼 구하는 함수를 만들어 놓고
// 팩토리얼 : 1부터 어떤 양의 정수 n까지의 정수를 모두 곱한 것 
// 이항계수 공식을 사용해서 출력

const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        :
        `5 2`
).split(' ').map(Number);

function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(input[0]) / (factorial(input[1]) * factorial(input[0] - input[1])));


