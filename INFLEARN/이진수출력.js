const solution = (n) => {
  let answer = '';
  const DFS = (n) => {
    // 몫이 0이 되면 반복 종료시킨다.
    if (n === 0) {
      return;
    } else {
      DFS(parseInt(n / 2));
      answer += (n % 2);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));