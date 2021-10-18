const solution = (seoul) => {
  let idx = seoul.indexOf('Kim');
  return '김서방은 ' + idx + '에 있다';
}

const seoul = ["Jane", "Kim"];
console.log(solution(seoul));