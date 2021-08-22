let solution = (arr) => {
  let value = Math.min(...arr);
  let answer = arr.filter((i) => i !== value);
  if (arr.length <= 1) {
    answer = [-1];
  }
  return answer;
}

const arr = [4, 3, 2, 1];
console.log(solution(arr));
