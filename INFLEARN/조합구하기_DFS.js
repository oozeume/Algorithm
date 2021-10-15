const solution = (N, M) => {
  let answer = [];
  let temp = Array.from({ length: M }, () => 0); // 임시로 저장해둘 배열

  const DFS = (L, s) => {
    if (L === M) { // 조합의 경우의 수 완성된 지점(종착점)
      answer.push(temp.slice());
    } else { // 가지가 뻗어나가는 지점
      for (let i = s; i <= N; i++) {
        temp[L] = i; // 값으로 1, 2, 3, 4 순차적으로 들어간다.
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));