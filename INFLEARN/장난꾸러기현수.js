const solution = (N, arr) => {
  // 원래 서있어야되는 순서(주어진배열 오름차순 정렬)와 주어진 배열 비교
  // 비교해서 다른 인덱스를 출력

  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}

const N = 9;
const arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(N, arr));


