// 해당 문자열에서 어떤 문자가 가장 많은 단어인지 찾기

let input = 'zZa';
let charMap = {}; // object 객체 (key와 value가 있다)

for (let char of input.toLowerCase()) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
}
// for of를 사용해서 각 문자가 쓰인만큼 object로 저장해주었다. 
// { b: 1, c: 3 } 이렇게 객체로 저장됨

let max = Math.max.apply(null, Object.values(charMap));
// 내장객체인 Object.values를 사용하여 charMap안에 있는 값들만 배열로 가져오고 
// 이 배열 중에서 Math.max.apply 메소드를 사용하여 배열 안 요소들 중 가장 큰 값을 찾음
// max = 3;

let maxChar = '';
let count = 0;
for (let char in charMap) { // 
    if (charMap[char] === max) { //for문을 돌면서 위에서 찾은 max값과 비교해서 
        maxChar = char; 
        count++; 
    }
    if (count > 1) {
        console.log('?');
        return;
    }
}

console.log(maxChar.toUpperCase()); // 찾은 maxChar를 대문자로 보여주기위해서 


