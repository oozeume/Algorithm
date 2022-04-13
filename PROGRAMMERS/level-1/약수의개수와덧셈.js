const divisors = (num) => {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }

  return count;
}

const solution = (left, right) => {
  let answer = 0;

  for (let j = left; j <= right; j++) {
    let count = divisors(j);
    if (count % 2 === 0) {
      answer += j;
    } else {
      answer -= j;
    }
  }
  return answer;
}

console.log(solution(13, 17));