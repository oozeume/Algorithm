const solution = (priorities, location) => {
  let answer = 0;
  let count = 0; // 출력횟수
  let myDoc = location; // 내 위치를 계속 바꿔준다. 

  while (priorities.length > 0) {
    let c = priorities.shift(); // 배열 제일 앞 문서를 꺼낸다.
    if (priorities.filter((e) => e > c).length > 0) { // 꺼낸 문서의 숫자보다 높은 숫자가 존재한다면
      priorities.push(c); // 배열의 맨 뒤로 이동(shift로 꺼낸 요소를 뒤로 다시 push)
    } else { // 꺼낸 문서의 숫자보다 큰 문서의 숫자가 없다면
      count++; // 출력한다(카운팅)
      if (myDoc === 0) { // 카운팅하고나서 내 문서가 0번째라면
        return answer = count; // 리턴한다
      }
    }
    myDoc--; // 배열 내 이동이 있었으므로 내 문서의 위치를 한 칸 앞당긴다. 
    if (myDoc === -1) { // 내 문서가 맨 뒤로 간 경우
      myDoc = priorities.length - 1; // 내 문서의 위치도 맨 뒤로 바꿔준다.
    }
  }

  return answer;
}

const priorities = [1, 1, 9, 1, 1, 1];
console.log(solution(priorities, 0));