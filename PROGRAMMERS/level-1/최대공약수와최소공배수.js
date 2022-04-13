const solution = (n, m) => {
  let answer = [];
  let minNum = Math.min(n, m);
  let maxNum = Math.max(n, m);

  while (maxNum % minNum !== 0) {
    let rest = maxNum % minNum;
    if(rest !== 0){
      maxNum = minNum;
      minNum = rest;
    }
  }

  answer.push(minNum);
  answer.push(n*m/minNum);

  return answer;
}

console.log(solution(3, 12));
