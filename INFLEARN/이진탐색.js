const solution = (M, numArr) => {
  let answer;
  numArr.sort((a, b) => a - b);

  let left = 0;
  let right = numArr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (numArr[mid] === M) {
      answer = mid + 1;
      break;
    } else if (numArr[mid] > M) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}

const M = 32;
const numArr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(M, numArr));