const solution = (arr1, arr2) => {
  let answer = [];
  let pointer1 = 0;
  let pointer2 = 0;

  // 주어진 배열 오름차순으로 먼저 정렬해준다.
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] === arr2[pointer2]) {
      answer.push(arr1[pointer1]);
      pointer1++;
      pointer2++;
    } else if (arr1[pointer1] < arr2[pointer2]) {
      pointer1++;
    } else {
      pointer2++;
    }
  }
  return answer;
}

const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];
console.log(solution(arr1, arr2));
