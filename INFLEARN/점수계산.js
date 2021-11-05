const solution = (arr) => {
  let answer = 0;
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) temp = 0;
    if (arr[i] === 1) {
      temp++;
      answer += temp;
    }
  }
  return answer;
}

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

// 예외처리 안해준거 있는지 확인하기
