let input = 2;
let count = 0; // 몇 번째인지 세주는 변수;
let NUM = 666; // 종말을 나타내는 가장 작은 숫자

while (true) {
    if (count === input) {
        break;
    }
    if (String(NUM).includes("666")) { // 문자열 NUM에 666이 포함되어 있으면
        count++;
    }
    NUM++;
}

console.log(NUM - 1);