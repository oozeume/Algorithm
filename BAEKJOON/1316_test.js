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

// 3개의 단어 중에서 그룹단어인 단엉의 개수는?
// 단어를 탐색하면서 
// 빈 배열을 하나 만들어 놓고, 단어가 그 배열안에 없으면 넣어주고,
// 있으면 그룹단어가 아니다. false처리 

let caseCount = Number(input[0]);
let groupCount = 0;

for (let i = 1; i <= caseCount; i++) {
    const word = input[i];
    const letter = [];
    let isGroup = true;

    for (let j = 0; j < word.length; j++) { // letter에 그 단어가 있는지 없는지 찾아서 없으면 넣어주고 있으면 isGroup=false로 바꾸고 break시킨다.
        if (letter.indexOf(word[j]) === -1) {
            letter.push(word[j]);
        } else {
            if (letter.indexOf(word[j]) !== letter.length - 1) {
                isGroup = false;
                break;
            }
        }
    }

    if (isGroup) {
        groupCount += 1;
    }
}

console.log(groupCount);