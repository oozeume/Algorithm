const solution = (coin, money) => {
  let answer = Number.MAX_SAFE_INTEGER; // 최소갯수를 구해야함으로 임의의 최대숫자로 초기화 세팅
  let n = coin.length;
  const DFS = (L, sum) => { // L은 동전갯수
    if (sum > money) {
      return;
    }
    if (L >= answer) { // 이미 작은 값이 나왔는데 더 탐색하지 않도록 처리(엣지커팅)
      return;
    }
    if (sum === money) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + coin[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

const coin = [1, 2, 5];
console.log(solution(coin, 15));