const solution = (numbers) => {
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  let numArr = number.filter(el => !numbers.includes(el));
  let sum = numArr.reduce((acc, cur) => acc + cur);

  return sum;
}

const numbers = [5, 8, 4, 0, 6, 7, 9];
console.log(solution(numbers));
