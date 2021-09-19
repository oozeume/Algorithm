const solution = (arr1, arr2) => {
  let answer = [];
  let pointer1 = 0;
  let pointer2 = 0;

  // 둘 중에 하나라도 참이 아니면 멈춰야함
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      answer.push(arr1[pointer1]);
      pointer1++;
    } else {
      answer.push(arr2[pointer2]);
      pointer2++;
    }
  }

  // 나머지 경우 처리
  while (pointer1 < arr1.length) {
    answer.push(arr1[pointer1]);
    pointer1++;
  }

  while (pointer2 < arr2.length) {
    answer.push(arr2[pointer2]);
    pointer2++;
  }

  return answer;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));