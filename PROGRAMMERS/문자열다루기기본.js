// 처음 풀이
const solution = (s) => {
  let answer = true;
  let numArr = "1234567890";

  // 문자열 하나씩 돌면서 숫자가 아니면 false반환, 모두 숫자이면 true반환
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      if (numArr.includes(s[i]) === true) {
        continue;
      } else {
        return answer = false;
      }
    }
  } else {
    return answer = false;
  }
  return answer;
}

// 다른 풀이
const solution = (s) => {
  return s.length === 4 || s.length === 6 ? !isNaN(s) : false;
}

const s = "a234";
console.log(solution(s));