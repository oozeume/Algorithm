const solution = (progresses, speeds) => {
  let answer = [0];
  let days = [];

  for (let i = 0; i < progresses.length; i++) {
    let rest = Math.ceil((100 - progresses[i]) / speeds[i]);
    days.push(rest);
  }

  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i]
      answer[++j] = 1;
    }
  }
  return answer;
}

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];
console.log(solution(progresses, speeds));