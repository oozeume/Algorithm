const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : // 예제 입력부분 (예제와 똑같이 입력!)
        `3
      happy
      new
      year
`
).split('\n');

// 하나씩 있는거는 그룹단어이고
// 앞에 나왔다가 뒤에 또 있으면 그룹단어가 아니다.
// 문자열 찾기
// 탐색하다가 그 단어가 나오면 그 단어를 저장해뒀다가 그 다음에 그 단어가 나오면 카운팅, 나오지 않으면 false처리

let caseCount = Number(input[0]); // input의 0번째 인덱스 숫자로 가져왔다. -> 몇 번 반복할건지
let countGroup = 0; // 찾아서 누적해줄거기 때문에 0으로 초기화시켜놓는다.

for (let i = 1; i <= caseCount; i++) { // 3으로 입력받은 caseCount만큼 반복시켜주기위한 for문
    const word = input[i];
    const letter = []; // 처음 발견된 글자를 넣는 곳
    let isGroupWord = true;

    for (let j = 0; j < word.length; j++) { // 단어를 반복시켜주기위한 for문
        if (letter.indexOf(word[j]) === -1) { // 탐색한 단어가 letter에 없으면
            letter.push(word[j]); // letter에 그 단어를 넣어준다
        } else { // 그 단어가 있으면 isGroupWord를 false시키고 카운팅하지 않는다. 
            if (letter.indexOf(word[j]) !== letter.length - 1) {
                isGroupWord = false;
                break;
            }
        }
    }

    if (isGroupWord) {
        countGroup += 1;
    }
}

console.log(countGroup);