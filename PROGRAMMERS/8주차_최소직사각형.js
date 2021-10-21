const solution = (sizes) => {
  let answer;
  let temp;
  let small = [];
  let big = [];

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      temp = sizes[i][1];
      sizes[i][1] = sizes[i][0];
      sizes[i][0] = temp;
    }
    small.push(sizes[i][1]);
    big.push(sizes[i][0]);
  }

  answer = Math.max(...big) * Math.max(...small);
  return answer;
}

const sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
console.log(solution(sizes));