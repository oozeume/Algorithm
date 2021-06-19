const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : // 예제 입력부분 (예제와 똑같이 입력!)
        `3
2 2
1 5
13 29`
).split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
    let num = input[i].split(' ').map(Number);
    let [N, M] = [num[0], num[1]];

    let answer = combination(M, N);
    console.log(Math.round(answer));
}

function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

// 조합을 구하는 공식을 사용 nCr = n! / (n-r)! * r!
function combination(M, N) { // M개 중에 N개를 선택하는 경우의 수여야함.
    return factorial(M) / (factorial(M - N) * factorial(N));
}