const solution = (brown, yellow) => {
  let sum = brown + yellow;

  // height는 최소가 3 -> 3부터 증가하도록
  // height를 임의의 값이라 정해놓고 width를 찾는다. 
  // 이미 딱 나누어지는 값일 때만 1차로 걸렀기 때문에
  // height에서 위 아래개수인 2를 빼고, 가로에서 양 옆 개수인 2를 빼서 곱했는데 yellow 개수와 같다면
  // width와 height값이 맞다. 
  for (let height = 3; height <= brown; height++) {
    if (sum % height === 0) {
      let width = sum / height;

      if ((height - 2) * (width - 2) === yellow) {
        return [width, height]
      }
    }
  }
}
console.log(solution(24, 24));