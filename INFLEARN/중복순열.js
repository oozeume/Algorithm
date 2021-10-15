const solution = (N, M) => {
  let answer = [];
  let temp = Array.from({ length: M }, () => 0);

  const DFS = (L) => { // 여기서 L이 몇중for문으로 도는지 결정하는 것과 같다 (N개중에 L개와 같은 개념)
    if (L === M) {
      answer.push(temp.slice()); // 복사해서 넣어줘야한다
      return;
    } else {
      for (let i = 1; i <= N; i++) {
        temp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(3, 2));