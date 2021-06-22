const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        :
        `8
1 1 0 0 0 0 1 1
1 1 0 0 0 0 1 1
0 0 0 0 1 1 0 0
0 0 0 0 1 1 0 0
1 0 0 0 1 1 1 1
0 1 0 0 1 1 1 1
0 0 1 1 1 1 1 1
0 0 1 1 1 1 1 1`
).split('\n');

const N = input[0];
const paper = input.slice(1).map(num => num.split(' '));
const size = [128, 64, 32, 16, 8, 4, 2, 1].filter(num => num <= N);

let white = 0; // white가 나오면 white를 카운팅해주고
let blue = 0; // blue가 나오면 blue 카운팅해준다.

// 자신을 호출한 배열을 순회하면서 수행할 처리를 콜백함수로 받아서 반복 호출 
// 수행할 처리가 콜백함수인데 이중for문
size.forEach(num => {

    for (let i = 0; i <= N - num; i += num) {
        for (let j = 0; j <= N - num; j += num) {
            let color = paper[i][j];
            let mono = true; // 기본값 true로 맞춰놓는다

            outer: for (let x = i; x < i + num; x++) {
                for (let y = j; y < j + num; y++) {
                    if (paper[x][y] === '2' || paper[x][y] !== color) { // 자리에 값이 2이면 다음번 부터 계산 안되도록
                        mono = false; // 여기서 반복문을 돌다가 false가 되면 상위 반복문으로 돌아가고
                        break outer;
                    }
                }
            }

            if (mono) { // mono = true 이면
                if (color === '0') white++; // white인거 카운팅했고
                else if (color === '1') blue++; // blue인거 카운팅 했으니까

                for (let x = i; x < i + num; x++) { // 계산 끝난거는 2로 바꿔준다.
                    for (let y = j; y < j + num; y++) {
                        paper[x][y] = '2';
                    }
                }
            }
        }
    }
});

console.log(white);
console.log(blue);
