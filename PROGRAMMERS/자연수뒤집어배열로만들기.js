const solution = (n) => {
  return n.toString().split('').reverse().map((el) => parseInt(el));
}


console.log(solution(12345));
