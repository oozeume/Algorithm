// 방법 1
const solution = (n, arr1, arr2) => {
  let answer = [];

  // 2진수로 변환하고, 0을 채워서 n자리 맞추기
  let binaryNumArr1 = arr1.map((i, idx) => arr1[idx].toString(2).padStart(n, '0'));
  let binaryNumArr2 = arr2.map((i, idx) => arr2[idx].toString(2).padStart(n, '0'));

  // 이중for문으로 비교하면서 #또는 공백으로 맞춰주기
  for (let i = 0; i < n; i++) {
    let allArr = '';

    for (let j = 0; j < n; j++) {
      if (binaryNumArr1[i][j] === '1' || binaryNumArr2[i][j] === '1') {
        allArr += '#';
      } else {
        allArr += ' ';
      }
    }
    answer.push(allArr);
  }
  return answer;
}

// 방법 2 : 비트연산
const solution = (n, arr1, arr2) => {
  return arr1.map((i, index) => ('0'.repeat(n) + (i | arr2[index]).toString(2)).slice(-n)).map(i => i.replace(/0/g, ' ').replace(/1/g, '#'));
}

const n = 5;
const arr1 = [9, 20, 28, 18, 11]
const arr2 = [30, 1, 21, 17, 28];
console.log(solution(n, arr1, arr2));