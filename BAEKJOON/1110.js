// 1차 (x -> 시간초과뜸)

let num = 26;

let sum; // 각 자리의 숫자 더한값
let new_num; // 새로 만들어진 값을 받는 변수
let count = 0; // 몇 번째 지나야하는지 카운팅해주는 변수 

while (true) {
    count++;

    sum = num % 10 + Math.floor(num / 10);
    new_num = (num % 10) * 10 + sum % 10;

    if (num === new_num) break; // num과 new_num이 일치하면 탈출
}

console.log(count);

// 2차 (num을 계속 받아와서 바꿔준거랑 처음 num이랑 비교하는 것 같다)

let num = 26;

let sum; // 각 자리의 숫자 더한값
let count = 0; // 몇 번째 지나야하는지 카운팅해주는 변수 

while (true) {
    count++;

    sum = num % 10 + Math.floor(num / 10);
    num = (num % 10) * 10 + sum % 10;

    if (num === 26) break; // while문 안에서 재할당된 num과 while문 바깥의 num값이 일치하면 탈출
}

console.log(count);


