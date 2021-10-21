const solution = (arr) => {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

const arr = [1, 1, 3, 3, 0, 1, 1];
console.log(solution(arr));