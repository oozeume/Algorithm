const solution = (numArr) => {
  let answer = 1;
  let temp = numArr[0];

  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] > temp) {
      answer++;
      temp = numArr[i];
    }
  }
  return answer;
}


const numArr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(numArr));
