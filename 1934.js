const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : // 예제 입력부분 (예제와 똑같이 입력!)
        `3
1 45000
6 10
13 17
`
).split('\n');

let greatestCommonFactor = 1; // 최대공약수 

for (let i = 1; i <= Number(input[0]); i++) {
    let [max, min] = input[i].split(' ').map((num) => Number(num)).sort((a, b) => (b - a));
    leastCommonMultiple(max, min); // 여기서 for문으로 각 배열에 접근하고 둘 중에 큰수 작은 수 찾았으니까 최소공배수 함수 호출해준다. 
}

function euclid(max, min){
    let remainder = max % min;
    if (remainder === 0) {
        greatestCommonFactor = min;
        return
    }
    euclid(min, remainder);
}

function leastCommonMultiple(max, min) { // 최소공배수 찾으려면 유클리드 호제법 필요하다. 
    greatestCommonFactor = 1; // 초기화

    if (max === min) {
        console.log(min);
        return;
    }

    euclid(max, min);

    return console.log(max * min / greatestCommonFactor); // 두 수의 곱/최대공약수 => 최소공배수
}

