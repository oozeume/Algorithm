const solution = (scores) => {
  let sum = 0;

  let sumArr = [];
  let scoreArr = [];
  let studentScoreArr = [];
  let len;

  let answer = '';

  // 배열 가공
  for (let i = 0; i < scores.length; i++) {
    studentScoreArr = [];
    for (let j = 0; j < scores.length; j++) {
      studentScoreArr.push(scores[j][i]);
    }
    scoreArr.push(studentScoreArr);
  }

  // 점수 가공
  for (let i = 0; i < scores.length; i++) {
    sum = 0;
    len = scoreArr[i].length;
    for (let j = 0; j < scores.length; j++) {
      let findIdx = scoreArr.indexOf(scoreArr[i]);
      let findCurrentIdx = scoreArr[i].indexOf(scoreArr[i][j]);

      if (findIdx === findCurrentIdx) {

        const myScore = scoreArr[i][j];
        const dubCheck = isDuplicate(scoreArr[i]);

        if (dubCheck) {
          if (Math.max(...scoreArr[i]) === myScore || Math.min(...scoreArr[i]) === myScore) {
            let myIdx = scoreArr[i].indexOf(myScore);
            console.log(myIdx);
            scoreArr[i].splice(myIdx, 1, 0);
            len--;
          } else {
            sum += scoreArr[i][j];
          }
        } else if (Math.max(...scoreArr[i]) === myScore || Math.min(...scoreArr[i]) === myScore) {
          let myIdx = scoreArr[i].indexOf(myScore);
          scoreArr[i].splice(myIdx, 1, 0);
          len--;
        } else {
          sum += scoreArr[i][j]
        }
      } else {
        sum += scoreArr[i][j];
      }
    }
    console.log(len);
    sumArr.push(sum / len);
  }

  // 학점 계산
  for (let i = 0; i < sumArr.length; i++) {
    if (sumArr[i] >= 90) {
      answer += 'A';
    } else if (90 > sumArr[i] && sumArr[i] >= 80) {
      answer += 'B';
    } else if (80 > sumArr[i] && sumArr[i] >= 70) {
      answer += 'C';
    } else if (70 > sumArr[i] && sumArr[i] >= 50) {
      answer += 'D';
    } else {
      answer += 'F';
    }
  }
  return answer;
}

const isDuplicate = (arr) => {
  const isDup = arr.some(function (x) {
    return arr.indexOf(x) !== arr.lastIndexOf(x);
  });
  return isDup;
}

const scores = [[100, 90, 98, 88, 65], [50, 45, 99, 85, 77], [47, 88, 95, 80, 67], [61, 57, 100, 80, 65], [24, 90, 94, 75, 65]]
console.log(solution(scores));