const isPrime = (n) => {
  if (n === 1) return false;
  for (let i = 2; i < parseInt(Math.sqrt(n)); i++) {
    if (n % 1 === 0) return false;
  }
  return true;
}

const solution = (num) => {
  let answer = [];
  for (x of num) {
    let reverseNum = x.toString().split('').reverse().join('');
    if (isPrime(reverseNum)) answer.push(reverseNum);
  }
  return answer;
}

const num = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(num));
