// 1. M부터 N까지의 모든 자연수를 나열한다. 
// 2. 남은 수 중에서 아직 처리하지 않은 가장 작은 수 i를 찾는다.  
// 3. 남은 수 중에서 i의 배수를 모두 제거한다. (i는 제외)

const M = 3;
const N = 16;

const isPrimeNumber = Array(N + 1).fill(true); // 배열을 만들고 배열을 true로 채운다. 
isPrimeNumber[1] = false;

for (let n = 2; n <= Math.ceil(Math.sqrt(N)); n++) { // 2, 3, 4
    if (isPrimeNumber[n]) {
        let m = 2;
        while (n * m <= N) {
            isPrimeNumber[n * m] = false;
            m++;
        }
    }
}

const results = [];
for (let n = M; n <= N; n++) {
    if (isPrimeNumber[n]) {
        results.push(n);
    }
}
console.log(results.join('\n'));


