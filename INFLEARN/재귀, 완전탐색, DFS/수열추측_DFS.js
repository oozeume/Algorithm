const solution = (N, F) => {
  let answer;
  let flag = 0; // 처음 값이 완성되었을 때 다음으로 넘어가지 않도록 처리
  // dy라는 2차원 배열에다가 메모이제이션 한다.N이 10까지 들어올 수 있으므로 11개의 2차원 배열을 만들어준다.
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  let check = Array.from({ length: N + 1 }, () => 0); // 체크해주는 배열
  let P = Array.from({ length: N }, () => 0); // 순열을 저장할 배열
  let C = Array.from({ length: N }, () => 0); // 조합을 저장할 배열

  const combination = (N, r) => { // 조합 구하기
    if (dy[N][r] > 0) {
      return dy[N][r];
    }
    if (N === r || r === 0) {
      return 1;
    } else {
      return dy[N][r] = combination(N - 1, r - 1) + combination(N - 1, r);
    }
  }

  const DFS = (L, sum) => {
    if (flag) return;
    if (L === N && sum === F) { // 순열이 완성된 지점
      answer = P.slice();
      flag = 1;
    } else { // 순열 구하기
      for (let i = 1; i <= N; i++) {
        if (check[i] === 0) { // check가 되지않았을 때 사용가능이므로
          check[i] = 1;
          P[L] = i;
          DFS(L + 1, sum + (C[L] * P[L]));
          check[i] = 0;
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    C[i] = combination(N - 1, i);
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));