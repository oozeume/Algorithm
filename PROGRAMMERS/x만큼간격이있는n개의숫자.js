const solution = (x, n) => {
  let answer = [];
  let temp = 0;
  for(let i=0; i<n; i++){
    temp = temp + x;
    answer.push(temp);
  }
  return answer;
}

console.log(solution(2, 5));