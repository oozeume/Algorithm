const solution = (arr) => {
  let str = arr.toString();
  let temp = 0;

  for (let i = 0; i < str.length; i++) {
    temp += Number(str[i]);
  }

  return arr % temp === 0 ? true : false;
}

console.log(solution(10));