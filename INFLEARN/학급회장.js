const solution = (str) => {
  let answer;
  let student = new Map();

  for (let x of str) {
    if (student.has(x)) {
      student.set(x, student.get(x) + 1);
    } else {
      student.set(x, 1);
    }
  }

  // 가장 작은 정수를 비교군으로 설정
  let max = Number.MIN_SAFE_INTEGER;

  for (let [key, value] of student) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

const str = "BACBACCACCBDEDE";
console.log(solution(str));

// B를 key로 사용한다. 