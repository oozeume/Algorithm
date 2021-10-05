const solution = (coordinate) => {
  // 0번째 인덱스 비교해서 1차 정렬, 그 안에서 1번째 인덱스 비교해서 2차 정렬
  let answer = coordinate;
  coordinate.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  })
  return answer;
}

const coordinate = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6]
]
console.log(solution(coordinate));