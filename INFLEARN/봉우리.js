const solution = (arr) => {
  let answer = 0;

  let row = [-1, 0, 1, 0]; // 상, 하 (x축 이동)
  let column = [0, 1, 0, -1]; // 좌, 우 (y축 이동)

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let flag = 1; // 봉우리인지아닌지 확인해주는 변수

      for (let k = 0; k < 4; k++) {
        let x = i + row[k]; // 가려고 하는 행 좌표
        let y = j + column[k]; // 가려고 하는 열 좌표
        if (x >= 0 && x < arr.length && y >= 0 && y < arr.length && arr[x][y] >= arr[i][j]) {
          flag = 0; // arr[x][y] >= arr[i][j] 이 현재지점보다 큰 수가 있는 것이므로
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
];
console.log(solution(arr));
