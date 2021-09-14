const solution = (dartResult) => {
  let answer = 0;
  let score = 0;
  let scoreArr = [];

  for (let i = 0; i < dartResult.length; i++) {
    // 점수가 10인 경우 찾아줘서 분리
    if (!isNaN(dartResult[i])) {
      score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
    }
    else if (dartResult[i] === 'S') { // 1제곱
      scoreArr.push(score);
    }
    else if (dartResult[i] === 'D') { // 2제곱
      scoreArr.push(Math.pow(score, 2));
    }
    else if (dartResult[i] === 'T') { // 3제곱
      scoreArr.push(Math.pow(score, 3));
    }
    else if (dartResult[i] === '*') {
      scoreArr[scoreArr.length - 2] = scoreArr[scoreArr.length - 2] * 2;
      scoreArr[scoreArr.length - 1] = scoreArr[scoreArr.length - 1] * 2;
    }
    else if (dartResult[i] === '#') {
      scoreArr[scoreArr.length - 1] = -1 * scoreArr[scoreArr.length - 1];
    }
  }
  answer = scoreArr.reduce((acc, cur) => acc + cur, 0);
  return answer;
}

const dartResult = '1S2D*3T';
console.log(solution(dartResult));

