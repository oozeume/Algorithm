const solution = (arr) => {
  let answer = arr; // 얕은 복사

  for (let i = 0; i < arr.length - 1; i++) { 
    // j가 마지막원소까지 돌 것이기 때문에 i는 arr.length - 1 까지만 돌면된다. 
    let minIdx = i; // 최소값 인덱스 초기화
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return answer;
}

const arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));