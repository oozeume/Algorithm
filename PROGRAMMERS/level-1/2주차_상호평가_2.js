const solution = (scores) => {
  let answer = '';

  for (let i = 0; i < scores.length; i++) {
    let myScore = scores[i][i];
    let count = scores.length;

    let min = 101;
    let max = -1;
    let sum = 0;

    let flag = true;

    for (let j = 0; j < scores.length; j++) {
      let score = scores[j][i];

      if (i !== j && myScore === score) { // 내점수가 아니고 동일한 점수가 아닐 때 
        flag = false;
      }

      min = Math.min(min, score);
      max = Math.max(max, score);
      sum += score;
    }

    if (flag && (min === myScore || max === myScore)) { // 내 점수일 때
      count--;
      sum -= myScore;
    }

    answer += findGrade(sum / count);
  }
  return answer;
}

const findGrade = (score) => {
  if (score >= 90) {
    return 'A';
  } else if (90 > score && score >= 80) {
    return 'B';
  } else if (80 > score && score >= 70) {
    return 'C';
  } else if (70 > score && score >= 50) {
    return 'D';
  } else {
    return 'F';
  }
}

const scores = [[100, 90, 98, 88, 65], [50, 45, 99, 85, 77], [47, 88, 95, 80, 67], [61, 57, 100, 80, 65], [24, 90, 94, 75, 65]]
console.log(solution(scores));