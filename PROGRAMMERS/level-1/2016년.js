// const solution = (a, b) => {
//   const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   const date = new Date(`2016/${a}/${b}`).getDay();
//   const answer = day[date];
//   return answer;
// }

const solution = (a, b) => {
  let answer = '';
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // 
  let sum = month[a - 1];

  answer = day[(sum + b - 1) % 7];
  return answer;
}

console.log(solution(5, 24));