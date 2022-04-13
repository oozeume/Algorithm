const solution = (A, B) => {
  let answer = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) answer.push('D');

    if (A[i] === 1) {
      if (B[i] === 2) answer.push('B');
      if (B[i] === 3) answer.push('A');
    }
    if (A[i] === 2) {
      if (B[i] === 1) answer.push('A');
      if (B[i] === 3) answer.push('B');
    }
    if (A[i] === 3) {
      if (B[i] === 1) answer.push('B');
      if (B[i] === 2) answer.push('A');
    }
  }
  return answer;
}

const A = [2, 3, 3, 1, 3];
const B = [1, 1, 2, 2, 3];
console.log(solution(A, B));
