const solution = (princeNum, N) => {
  let answer;
  // 왕자 수만큼 배열로 만든다.
  let princeArr = Array.from({ length: princeNum }, (value, idx) => idx + 1);

  while (princeArr.length) { // princeArr.length가 0이 되면 멈춘다
    for (let i = 1; i < N; i++) {
      princeArr.push(princeArr.shift());
    }

    princeArr.shift(); // 꺼내서 없애기

    if (princeArr.length === 1) {
      answer = princeArr.shift();
    }
  }
  return answer;
}

const princeNum = 8;
const N = 3;
console.log(solution(princeNum, N));