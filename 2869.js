const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : // 예제 입력부분 (예제와 똑같이 입력!)
        `2 1 5`
).split(' ').map((num) => Number(num));


let Up = input[0];
let Down = input[1];
let AllDistance = input[2];

console.log(Math.ceil((AllDistance-Down)/(Up-Down))); // 소수점 자리 있으면 모두 올림
// 정상에 도착하면 미끄러지지 않으니까 미끄러지는 거리를 한번 빼준다. 
// 총거리 / 하루에 갈 수 있는 거리


