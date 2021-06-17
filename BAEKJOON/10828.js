const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : 
        `14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`
).split('\n');

let stack = [];
let stackSize = 0; // stack 배열안에 뭐가 들어있는지 확인하는 용도의 카운팅, 요소가 들어갈 때마다 카운팅 시켜서 확인함
let result = ""; // 여기에 값을 계속 누적해서 넣어준다. 뒤에 띄어쓰기가 있는 이유

for (let i = 1; i < input.length; i++) {
    let arr = input[i].split(" ");
    let word = arr[0];

    switch (word) {
        case "push":
            stack.push(Number(arr[1]));
            stackSize++;
            continue;
        
        case "top":
            if(stackSize === 0) result += `-1\n`;
            else {
                // 스택의 가장 위에있는 정수 출력
                result += `${stack[stackSize - 1]}\n`;
            }
            continue;

        case "pop":
            if (stackSize === 0) result += `-1\n`;
            else {
                result += `${stack.pop()}\n`;
                stackSize--;
            }
            continue;
        
        case "size":
            result += `${stackSize}\n`;
            continue;
    
        case "empty":
            result += stackSize === 0 ? `1\n` : `0\n`;
            continue;
            
    }
}

console.log(result.trim());




