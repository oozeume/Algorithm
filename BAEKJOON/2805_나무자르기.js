const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        :
        `5 20
4 42 40 26 46`
).split('\n');

let [N, M] = input[0].split(' ').map(Number);
let tree = input[1].split(' ').map(Number);

//  (1 ≤ N ≤ 1,000,000, 1 ≤ M ≤ 2,000,000,000)

let left = 0;
let right = 2000000000;

// while문을 돌린 결과를 console.log로 보여준다. 

while (left <= right) {
    let mid = parseInt((left + right) / 2); // while문 안에서 반복해서 중간값 찾아준다.
    let result = tree.reduce((accu, curr) => { // 나무의 길이 찾는 변수 result. reduce메소드로 계속 순회
        if (curr - mid > 0) return accu + (curr - mid);
        else return accu;
    }, 0);

    if (result >= M) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(left - 1);