const solution = (M, a) => {
  // 연속부분수열의 합이 특정 숫자 M이 되는 경우가 몇번인지 카운팅
  let answer = 0;
  let sum = 0;
  let end = 0;

  for (let start = 0; start < a.length; start++) {
    sum += a[start];
    if (sum === M) answer++;
    while (sum >= M) {
      sum -= a[end++];
      if (sum === M) answer++;
    }
  }

  return answer;
}

const M = 6;
const a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(M, a));