const solution = (horseCount, stable) => {
  let answer;
  stable.sort((a, b) => a - b);

  let left = 1;
  let right = stable[stable.length - 1];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (count(stable, mid) >= horseCount) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
}

const count = (stable, mid) => {
  let count = 1;
  endPoint = stable[0]; // 첫 번째 말은 가장 왼쪽
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - endPoint >= mid) { // 크거나 같아야 말을 배치할 수 있는 것
      count++;
      endPoint = stable[i];
    }
  }
  return count;
}

const horseCount = 3;
const stable = [1, 2, 8, 4, 9];
console.log(solution(horseCount, stable));