// 1. M부터 N까지의 모든 자연수를 나열한다. 
// 2. 남은 수 중에서 아직 처리하지 않은 가장 작은 수 i를 찾는다.  
// 3. 남은 수 중에서 i의 배수를 모두 제거한다. (i는 제외)

const M = 3;
const N = 16;

const isPrimeNumber = Array(N + 1).fill(true); // 배열을 만들고 배열을 true로 채운다. 
isPrimeNumber[1] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(N)); i++) { 
    if (isPrimeNumber[i]) {
        let m = 2;
        while (i * m <= N) {
            isPrimeNumber[i * m] = false;
            m++;
        }
    }
}

const results = []; // 찾은 소수를 넣어줄 빈 배열
for (let i = M; i <= N; i++) { // 3부터 16까지 반복
    if (isPrimeNumber[i]) { // isPrimeNumber[ ]
        results.push(i);
    }
}
console.log(results.join('\n')); // 배열의 모든 요소를 문자열로 변환한 후 반환


