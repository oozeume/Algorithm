const solution = (absolutes, signs) => {
  let answer = absolutes.map((num, idx) => signs[idx] ? num : parseInt(-num)).reduce((a, b) => a + b);
  return answer;
}


const absolutes = [4, 7, 12];
const signs = [true, false, true];
console.log(solution(absolutes, signs));