const solution = (board, moves) => {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < moves.length; i++) {
    let n = moves[i] - 1;

    for (let j = 0; j < board.length; j++) {
      if (board[j][n] !== 0) {
        if (stack[stack.length - 1] === board[j][n]) {
          answer += 2;
          stack.pop();
        } else {
          stack.push(board[j][n]);
        }
        board[j][n] = 0;
        break;
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