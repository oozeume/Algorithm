const solution = (str) => {
  // 배열을 for문으로 돌면서 (이면 push )이면 pop해서 하나도 안남아있으면 yes 리턴, 하나라도 남아있으면 no 리턴
  let answer = "YES";
  let newArr = [];

  for (let x of str) {
    if (x === '(') newArr.push(x);
    else {
      if (newArr.length === 0) {
        return "No";
      }
      newArr.pop(x);
    }
  }

  if (newArr.length === 0) {
    return answer;
  } else {
    return "NO";
  }
}

const str = "()()"
console.log(solution(str));