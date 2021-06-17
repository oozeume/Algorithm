// 이전 작동시기에 k광년을 이동하였을 때는 k-1 , k 혹은 k+1 광년만을 다시 이동할 수 있다.  
// 이 장치를 처음 작동시킬 경우 -1 , 0 , 1 광년을 이론상 이동할 수 있으나 사실상 음수 혹은 0 거리만큼의 이동은 의미가 없으므로 1 광년을 이동할 수 있으며, 그 다음에는 0 , 1 , 2 광년을 이동할 수 있는 것이다.
// x지점 -> y지점을 향해 최소한의 횟수로 이동
// y지점에 도착하기 바로 직전의 이동거리는 반드시 1광년으로 한다 
// x지점부터 정확히 y지점으로 이동하는데 필요한 공간 이동 장치 작동 횟수의 최솟값을 구해라

// 현재 위치 x 
// 목표 위치 y
// x는 항상 y보다 작은 값을 갖는다. (0 ≤ x < y < 231)
// y-x = distance 거리

const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : // 예제 입력부분 (예제와 똑같이 입력!)
        `3
0 3
1 5
45 50`
).split('\n');

const testCase = parseInt(input[0]); // 테스트케이스 개수

for (let i = 1; i <= testCase; i++) {
    let CASE = input[i].split(' ').map(Number);
    let x = CASE[0];
    let y = CASE[1];
    let distance = y - x;

    const max = parseInt(Math.sqrt(distance)); // 한번 이동한 거리의 최대값 (한번 이동할때 얼마나 많이 이동할 수 있는지?)
    
    if (max === Math.sqrt(distance)) {
        console.log(2 * max - 1);
    } else if (distance <= max * max + max) {
        console.log(2 * max);
    } else {
        console.log(2 * max + 1)
    }
}

