const solution = (cashSize, arr) => {
  // N개의 작업을 처리한 후 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례대로 출력
  let answer = Array.from({ length: cashSize }, () => 0); // answer가 캐시메모리 역할

  arr.forEach(el => {
    //el의 값이 answer라는 배열에 있는지 없는지 알아야한다. (hit인지 miss인지)
    let position = -1; // 초기화
    // hit인 상황
    for (let i = 0; i < cashSize; i++) {
      if (el === answer[i]) {
        position = i; // position에 위치 저장(hit된 지점)
      }
    }
    // miss인 상황
    if (position === -1) {
      answer.unshift(el);
      if (answer.length > cashSize) {
        answer.pop();
      }
    } else {
      answer.splice(position, 1);
      answer.unshift(el);
    }
  });

  return answer;

}

const cashSize = 5;
const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(cashSize, arr));