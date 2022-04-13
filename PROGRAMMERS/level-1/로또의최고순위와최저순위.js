const solution = (lottos, win_nums) => {
  let answer = [];

  let zeroCount = lottos.filter((el) => el === 0).length;
  let sameNums = lottos.filter((el) => win_nums.includes(el)).length;

  let min = 7 - sameNums >= 6 ? 6 : 7 - sameNums; // 최저순위
  let max = min - zeroCount < 1 ? 1 : min - zeroCount// 최고순위

  answer = [max, min];
  return answer;
}

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];
console.log(solution(lottos, win_nums));
