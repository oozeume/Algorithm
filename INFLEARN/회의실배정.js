const solution = (meeting) => {
  let answer = 0;

  meeting.sort((a, b) => {
    if (a[1] === b[1]) { // 끝나는 시간이 같으면
      return a[0] - b[0]; // 시작시간 기준으로 정렬
    } else { // 끝나는 시간이 다르면
      return a[1] - b[1];
    }
  })

  let endTime = 0;
  for (let x of meeting) {
    if (x[0] >= endTime) {
      answer++;
      endTime = x[1]; // 끝시간 맞춰주기
    }
  }
  return answer;
}

const meeting = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7]
];
console.log(solution(meeting));