const solution = (arr, K) => {
  let answer;
  let sum = 0;

  // 처음에 K 개수만큼 더 해서 sum을 만들어놓고 시작
  for (let i = 0; i < K; i++) {
    sum += arr[i];
  }
  answer = sum;

  for (let i = K; i < arr.length; i++) {
    sum += (arr[i] - arr[i - K]);
    answer = Math.max(answer, sum);
  }
  return answer;
}

const K = 3;
const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(arr, K));