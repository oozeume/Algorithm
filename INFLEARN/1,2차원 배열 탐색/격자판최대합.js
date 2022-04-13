const solution = (arr) => {
  let sum, sum2 = 0;
  let answer;

  let tempArr = [];

  // 각 행의 합
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[i][j];
    }
    tempArr.push(sum);
  }

  // 각 열의 합
  for (let i = 0; i < arr.length; i++) {
    sum2 = 0;
    for (let j = 0; j < arr.length; j++) {
      sum2 += arr[j][i];
    }
    tempArr.push(sum2);
  }

  let sum3 = 0;
  let sum4 = 0;
  // 대각선 합
  for (let i = 0; i < arr.length; i++) {
    sum3 += arr[i][i];
    sum4 += arr[i][arr.length - i - 1];
  }
  tempArr.push(sum3);
  tempArr.push(sum4);

  return answer = Math.max(...tempArr);
}

const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
];
console.log(solution(arr));