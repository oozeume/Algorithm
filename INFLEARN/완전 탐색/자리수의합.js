const solution = (num) => {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of num) {
    let sum = 0;
    let temp = x;

    while (temp) {
      sum += (temp % 10);
      temp = Math.floor(temp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) { // 같은게 발견되면
      if (x > answer) answer = x;
    }
  }
  return answer;
}

const num = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(num));