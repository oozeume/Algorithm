const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : // 예제 입력부분 (예제와 똑같이 입력!)
        `2
6 12 10
30 50 72`
).split('\n');

const testCase = Number(input[0]);

// 기능을 하는 함수를 만들어줘서 for문 안에 넣어서 돌린다.

for (let i = 1; i <= testCase; i++) {
    let [H, W, N] = input[i].split(' ').map((num) => Number(num));
    setRoomNum(H, W, N);
}

function setRoomNum(H, W, N) {
    let floorNum = N % H === 0 ? String(H) : String(N % H); // 나누어 떨어져서 0이면 6층, 아니면 나머지 층
    let roomNum = Math.ceil(N / H);
    let result = roomNum < 10 ? floorNum + "0" + String(roomNum) : floorNum + String(roomNum);
    console.log(Number(result));
}



