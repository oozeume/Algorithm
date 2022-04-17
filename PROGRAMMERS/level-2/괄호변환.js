function solution(p) {
  let answer = "" // 결과값 담을 문자열
  let left = 0 // 왼쪽 괄호 개수 카운팅
  let right = 0 // 오른쪽 괄호 개수 카운팅
  let check = false // '올바른 괄호'인지 체크

  // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
  if (p.length === 0) {
    return ""
  }

  // 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다.
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") left++;
    if (p[i] === ")") right++;

    if (right > left) check = true;

    // 균현 잡힌 문자열이 되었으면, u와 v로 쪼갤 타이밍이다. 
    if (left === right) {
      if (check == true) {
        // 4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
        answer += "("
        // 4-2.문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
        answer += solution(p.slice(i + 1, p.length))
        answer += ")"

        for (let j = 1; j < i; j++) {
          if (p[j] == ')') answer += '(';
          if (p[j] == '(') answer += ')';
        }
        return answer
      } else {
        answer += p.slice(0, i + 1);
        answer += solution(p.slice(i + 1, p.length));
        return answer;
      }
    }
  }
}

const p = "()))((()"
console.log(solution(p))