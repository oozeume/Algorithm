const solution = (str) => {
  // 후위표기식 : 피연산자 뒤에 연산자를 쓰는 방식
  // 모든 연산자는 항상 앞의 두 개 값을 이용해 계산한다.
  let answer;
  let stack = [];

  for (let x of str) {
    if (!isNaN(x)) { // 연산자가 나오기전까지 (숫자이면 push)
      stack.push(Number(x));
    } else {
      // 어떤 숫자가 왼쪽으로 가고, 어떤 숫자가 오른쪽으로 가는지 중요
      let right = stack.pop();
      let left = stack.pop();

      if (x === '+') {
        stack.push(left + right)
      } else if (x === '-') {
        stack.push(left - right);
      } else if (x === '*') {
        stack.push(left * right);
      } else if (x === '/') {
        stack.push(left / right);
      }
    }
  }
  answer = stack[0];
  return answer;
}

const str = "352+*9-"
console.log(solution(str));