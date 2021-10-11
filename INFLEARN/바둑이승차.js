const solution = (C, weightArr) => {
  let answer = Number.MIN_SAFE_INTEGER; // 가장 작은 수로 세팅
  let n = weightArr.length;
  const DFS = (L, sum) => {
    if (sum > C) return;
    if (L === n) { // 태우는 경우의 수, 완료시점
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + weightArr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

const weightArr = [81, 58, 42, 33, 61];
console.log(solution(259, weightArr));