const solution = (numbers, hand) => {
  let answer = '';

  let keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  let leftHand = keypad['*'];
  let rightHand = keypad['#'];

  for (let x of numbers) {
    let [i, j] = keypad[x];

    if (j === 0) {
      answer += 'L';
      leftHand = keypad[x];
    }
    else if (j === 2) {
      answer += 'R';
      rightHand = keypad[x];
    }
    else {
      // 왼쪽 손가락 위치와 현재 위치와 떨어진 거리계산
      let leftDistance = Math.abs(i - leftHand[0]) + Math.abs(j - leftHand[1]);
      // 오른쪽 손가락 위치와 현재 위치와 떨어진 거리계산
      let rightDistance = Math.abs(i - rightHand[0]) + Math.abs(j - rightHand[1]);

      if (leftDistance > rightDistance) {
        rightHand = keypad[x];
        answer += 'R';
      }
      else if (leftDistance < rightDistance) {
        leftHand = keypad[x];
        answer += 'L';
      }
      else if (leftDistance === rightDistance) {
        if (hand === 'left') {
          leftHand = keypad[x];
          answer += 'L';
        } else {
          rightHand = keypad[x];
          answer += 'R';
        }
      }
    }
  }
  return answer;
}

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = 'right';
console.log(solution(numbers, hand));