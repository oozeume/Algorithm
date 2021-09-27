const solution = (str) => {
  let answer = 0;
  let stack = [];

  // 여는 괄호를 만나면 막대기의 시작점 또는 레이저의 시작점이다. -> stack에 푸시
  // 닫는 괄호를 만나면 막대기의 닫는점인지 레이저의 닫는점인지 확인해야한다 -> 바로 앞을 살펴본다

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') { // str[i]가 여는 괄호일 경우
      stack.push(str[i]);
    } else { // str[i]가 닫는 괄호일 경우
      stack.pop();
      if (str[i - 1] === '(') { // 레이저인 경우
        // 막대기가 몇 개가 잘리는 지 answer에 카운팅 -> stack의 length 누적
        answer += stack.length;
      } else { // 막대기의 끝인 경우
        // 닫는 괄호를 만나면 무조건 하나는 pop해야한다.
        answer++;
      }
    }
  }
  return answer;
}

const str = "()(((()())(())()))(())";
console.log(solution(str));