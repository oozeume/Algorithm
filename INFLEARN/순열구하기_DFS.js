const solution = (num, M) => {
  let answer = [];

  let n = num.length;
  let temp = Array.from({ length: M }, () => 0);
  let check = Array.from({ length: n }, () => 0);

  const DFS = (L) => {
    if (L === M) { // 트리 레벨(단계)이 뽑아야하는 개수가 되었을 때 -> 종료지점
      answer.push(temp.slice());
      return;
    } else { // 트리 뻗기
      for (let i = 0; i < n; i++) {
        if (check[i] === 0) {
          check[i] = 1; // 현재 요소 사용할 것이므로 1로 바꿔주고
          temp[L] = num[i]; // 현재요소를 temp[L]번째에 넣어준다.
          DFS(L + 1); // 다음 원소로 넘어간다.
          check[i] = 0; // 이용했으니까 체크 0으로 바꿔주기
        }
      }
    }
  }
  DFS(0);
  return answer;
}

const num = [3, 6, 9];
console.log(solution(num, 2));