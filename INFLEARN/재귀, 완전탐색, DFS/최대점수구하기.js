const solution = (minute, score, time) => {
  let answer = Number.MIN_SAFE_INTEGER; // 가장 작은 수로 세팅
  let n = score.length;
  const DFS = (L, sum, pTime) => {
    if (pTime > minute) return; // 시간제한 때문에 if문으로 한 번 더 걸러줘야함
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + score[L], pTime + time[L]);
      DFS(L + 1, sum, pTime);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let score = [10, 25, 15, 6, 7];
let time = [5, 12, 8, 3, 4];
console.log(solution(20, score, time));