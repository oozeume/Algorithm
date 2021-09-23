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

      if (findIdx === findCurrentIdx) { // 각 행에서 내가 준 나의 점수 확인하기
        // 배열 중에서 내가 준 내 점수가 유일하게 가장 작은 값이거나, 가장 큰 값이거나

        const myScore = scoreArr[i][j]; // 내 점수는 잘 찾고있음
        const dubCheck = isDuplicate(scoreArr[i]); // 중복 유무 확인

        if (dubCheck) { // 내 점수와 중복된 값이 있으면
          if (Math.max(...scoreArr[i]) === myScore || Math.min(...scoreArr[i]) === myScore) {
            let myIdx = scoreArr[i].indexOf(myScore);
            console.log(myIdx);
            scoreArr[i].splice(myIdx, 1, 0); // 잘못빠지고 있었네? 왜그렇지??
            len--;
          } else {
            sum += scoreArr[i][j]; // 그대로 진행
          }
        } else if (Math.max(...scoreArr[i]) === myScore || Math.min(...scoreArr[i]) === myScore) {
          let myIdx = scoreArr[i].indexOf(myScore);
          scoreArr[i].splice(myIdx, 1, 0); // 잘못빠지고 있었네? 왜그렇지??
          len--;
        } else {
          sum += scoreArr[i][j]
        }
      } else {
        sum += scoreArr[i][j];
      }
    }
    console.log(len); // 여기서 length가 제대로 안빠지고 있다. 
    sumArr.push(sum / len);
  }

  // 학점 계산
  for (let i = 0; i < sumArr.length; i++) {
    if (sumArr[i] >= Number(90)) {
      answer += 'A';
    } else if (Number(90) > sumArr[i] && sumArr[i] >= Number(80)) {
      answer += 'B';
    } else if (Number(80) > sumArr[i] && sumArr[i] >= Number(70)) {
      answer += 'C';
    } else if (Number(70) > sumArr[i] && sumArr[i] >= Number(50)) {
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