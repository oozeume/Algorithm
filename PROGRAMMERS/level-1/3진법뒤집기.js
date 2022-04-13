const solution = (n) => {
  let answer = n.toString(3).split('').reverse().join('');
  return parseInt(answer, 3);
}

const n = 45;
console.log(solution(n));