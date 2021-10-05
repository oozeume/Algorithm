const solution = (times) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeLine = [];

  for (let x of times) {
    timeLine.push([x[0], 'start']);
    timeLine.push([x[1], 'end']);
  }

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) {
      //start인지 end인지 (아스키코드넘버 기준으로 오름차순 정렬)
      return a[1].charCodeAt() - b[1].charCodeAt();
    } else {
      return a[0] - b[0];
    }
  });

  let count = 0;

  for (let x of timeLine) {
    if (x[1] === 'start') {
      count++;
    } else {
      count--;
    }
    answer = Math.max(answer, count);
  }
  return answer;
}

const times = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14]
];
console.log(solution(times));