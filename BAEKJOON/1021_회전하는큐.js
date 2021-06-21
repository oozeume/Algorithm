const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        :
        `10 3
2 9 5`
).split('\n');

let [queueSize, GetNum] = input[0].split(' ').map(Number); // 10 3
let elements = (input[1].split(' ').map(Number));

// 일단 큐를 만든다. 배열로 
let queue = new Array(queueSize);
let count = 0 // 이동시킬때마다 count 증가시키고, 마지막에 출력

// 큐 배열 안에 요소를 넣어준다.
for (let i = 0; i < queueSize; i++) {
    queue[i] = i + 1;
}

function moveElement(queue, action) {
    switch (action) {
        case 'goBack': // 조건 3. 왼쪽으로 한 칸 이동시킨다. 뽑은거 제일 뒤로
            let goBackTarget = queue.shift(); // 배열에서 첫번째 요소를 제거하고 제거한 요소 반환
            queue.push(goBackTarget); // 첫번째 요소제거하고 제거한 요소를 push해준다.(제일마지막으로 이동)
            count++;
            break;
        case 'goFront': // 조건 2. 오른쪽으로 한 칸 이동시킨다. 
            let goFrontTarget = queue.pop(); // 배열에서 마지막 요소를 뽑는다. 
            queue.unshift(goFrontTarget) // unshift는 인수로 전달받은 값을 배열의 선두에 요소로 추가하고 변경된 length값 반환
            count++;
            break;
        case 'get': // 조건 1. 첫번째 원소를 뽑아낸다. 
            queue.shift(); // 배열에서 첫번째 요소를 제거하고 제거한 요소 반환
            queueSize--;
            break;
        default:
            null;
    }
}

// for문 안에서 왼쪽 오른쪽 찾아내서 맞는 연산을 수행하는 함수 실행
for (num of elements) {
    let numIndex = queue.indexOf(num); // num의 인덱스 반환
    let left = numIndex;
    let right = queueSize - numIndex;

    if (left <= right) { // 요소가 배열의 왼쪽에 더 가까운 경우
        for (let j = 0; j < left; j++) {
            moveElement(queue, 'goBack'); // 왼쪽으로 이동시키는 함수 
        }
    } else {
        for (let j = 0; j < right; j++){ // 요소가 배열의 오른쪽에 더 가까운 경우
            moveElement(queue, 'goFront');
        }
    }
    moveElement(queue, 'get');
}

console.log(count);
