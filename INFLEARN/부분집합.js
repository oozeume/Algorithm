const solution = (n) => {
  let answer = [];

  // 체크배열 생성
  let checkArr = Array.from({ length: n + 1 }, () => 0);
  const DFS = (v) => {
    if (v === n + 1) { // 부분집합 하나가 참이 되었을 때
      let temp = ''; // 누적해줄 변수
      for (let i = 1; i <= n; i++) {
        if (checkArr[i] === 1) {
          temp += i + ' ';
        }
      }
      if (temp.length > 0) answer.push(temp.trim());
    } else { // 두 갈래 뻗는 지점
      checkArr[v] = 1; // 포함 시킨다는 뜻
      DFS(v + 1);
      checkArr[v] = 0; // 포함 안시킨다는 뜻
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));