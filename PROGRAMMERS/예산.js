const solution = (d, budget) => {
  let answer = 0;
  // 가장 작은 예산을 가진 부서부터 총 예산을 차감해가야 지원할 수 있는 부서가 최대로 된다. 
  d.sort((a, b) => a - b); // 오름차순 정렬

  d.reduce((acc, cur) => {
    acc + cur <= budget ? answer++ : answer;
    return acc + cur;
  }, 0);

  return answer;
}

const d = [1, 3, 2, 5, 4];
const budget = 9;
console.log(solution(d, budget));