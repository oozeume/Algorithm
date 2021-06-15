// vscode에서 백준 코드 결과값 확인할 수 있고, 변수할당을 쉽게 할 수 있는 방법
const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : // 예제 입력부분 (예제와 똑같이 입력!)
        `ljes=njak`
).trim();

// 이거는 크로아티에 알파벳을 작성을 해줘야하나?
let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

// ddz=z=에서 크로아티아 글자는 몇개일까
// 크로아티아 배열이랑 지금 input 글자를 받아와서 대조하면서 맞으면 카운팅 하는 방식?을 생각했는데
// 보니까 크로아티아 배열을 하나씩 돌면서 input에서 크로아티아 글자가 있으면 split하고 그부분을 Q로 변경

function solution(input) {
    for (let x of croatia) {
        input = input.split(x).join("Q");
    }

    return input.length; // return input일 경우 QeQQak를 반환한다.
}

console.log(solution(input));


