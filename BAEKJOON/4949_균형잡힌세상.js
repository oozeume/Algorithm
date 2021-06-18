const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`
).trim().split('\n');

// 일단 각 줄을 돌려야하기 때문에 for문은 사용될 것 같고

const open = ["(", "["]; // 여는 괄호 적어주고
const closed = [")", "]"]; // 닫는 괄호 적어주고 
let stack;
const yesno = []; // yes no 찾은 값을 배열 속에 넣어준다. 

for (let j=0; j<input.length-1; j++){ // 각 줄을 실행시켜줄 for문
    let isNo = false; // No를 false로 맞춰놓는다
    stack = [];
    let sentence = input[j]; // 각 문장

    for (let i=0; i<sentence.length; i++) { // 문장 안에 string 요소를 돌면서 확인한다. 
        if (open.includes(sentence[i])) stack.push(sentence[i]);
        else if (closed.includes(sentence[i])) {
            if (stack.pop() !== open[closed.indexOf(sentence[i])]) { // open괄호와 closed괄호의 짝을 찾아주는 과정
                yesno.push("no");
                isNo = true;
                break;
            }
        }
    }

    // stack이 비어 있으면 yes를 출력하고, 비어 있지 않으면 no를 출력한다.
    if (!isNo) {
        if (stack.length === 0) yesno.push("yes");
        else yesno.push("no");
    }
}

console.log(yesno.join("\n"));

