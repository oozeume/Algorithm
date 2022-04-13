const solution = (arr, divisor) => {
  let answer = [];

  for (let x of arr) {
    if (x % divisor === 0) answer.push(x);
  }

  if (answer.length === 0) answer.push(-1);

  return answer.sort((a, b) => a - b);
}

const arr = [2, 36, 1, 3];
const divisor = 1;
console.log(solution(arr, divisor));
