const solution = (array, commands) => {
  let answer = [];

  for (let x of commands) {
    let Arr = array.slice(x[0] - 1, x[1]);
    let sortedArr = Arr.sort((a, b) => (a - b));
    answer.push(sortedArr[x[2] - 1]);
  }
  return answer;
}