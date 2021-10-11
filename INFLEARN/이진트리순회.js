const solution = (v) => {
  let answer;
  const DFS = (v) => {
    if (v > 7) { // 종착지점(멈추는 지점)
      return;
    } else {  // 두 갈래로 뻗어야하는 지점
      DFS(v * 2);
      DFS(v * 2 + 1);
      console.log(v);
    }
  }
  DFS(v);
  return answer;
}

console.log(solution(1));