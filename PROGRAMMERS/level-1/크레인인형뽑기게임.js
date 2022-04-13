const solution = (board, moves) => {
  // 2차원 배열에서 moves의 순서대로 꺼내서 배열에 담는다.
  // 중복되는 횟수 구해서 리턴
  let answer = 0;
  let basket = [];

  for (let i = 0; i < moves.length; i++) {
    let n = moves[i] - 1; //크레인 위치 n을 기준으로 세로길이만큼 탐색

    for (let j = 0; j < board.length; j++) {
      // 0이 아닌 숫자를 꺼내서 basket 배열에 담는다. 
      if (board[j][n] !== 0) {
        if (basket[basket.length - 1] === board[j][n]) {
          answer += 2;
          basket.pop();
        } else {
          basket.push(board[j][n]);
        }
        board[j][n] = 0; // 꺼낸 자리 0으로 초기화
        break; // 해당 한개만 꺼내기 위해서 (for문 멈추기)
      }
    }
  }
  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));