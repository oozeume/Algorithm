const solution = (n, r) => {
  let answer;

  let dy = Array.from(Array(35), () => Array(35).fill(0)) // 3행 5열짜리의 0으로 초기화된 2차원 배열을 만든다.

  const DFS = (n, r) => {
    if (dy[n][r] > 0) {
      return dy[n][r];
    }
    if (n === r || r === 0) {
      return 1;
    } else {
      return dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
    }
  }
  answer = DFS(n, r)
  return answer;
}

console.log(solution(5, 3));