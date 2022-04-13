const solution = (test) => {
  let answer = 0;
  m = test.length; // 3 : 테스트 횟수
  n = test[0].length; // 4 : 학생수

  // 4중 for문 사용
  for (let i = 1; i <= n; i++) { // 1번 학생부터 n번 학생까지
    for (let j = 1; j <= n; j++) { // (i, j) = (멘토, 멘티) 모든 경우의 수 탐색
      let count = 0;

      for (let k = 0; k < m; k++) { // 테스트 횟수
        let i_grade = 0; // 등수 i를 임시저장할 변수
        let j_grade = 0; // 등수 j를 임시저장할 변수
        for (let s = 0; s < n; s++) { // 학생수
          if (test[k][s] === i) i_grade = s;
          if (test[k][s] === j) j_grade = s;
        }
        if (i_grade < j_grade) count++; // 멘토가 앞서는 경우 카운팅
      }
      if (count === m) answer++; // 3번의 테스트 경우에서 모두 앞선 경우만 answer에 카운팅
    }
  }
  return answer;
}

const test = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(test));