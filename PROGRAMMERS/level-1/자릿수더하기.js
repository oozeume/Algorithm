const solution = (N) => {
  let answer = 0;
  let num = String(N);

  for (let i = 0; i < num.length; i++) {
    answer += parseInt(num[i]);
  }

  return answer;
}

const N = '987';
console.log(solution(N));