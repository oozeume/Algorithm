const isPrime = (n) => {
  // n이 소수이면 true, 소수가 아니면 false를 리턴하는 함수
  if (n === 1) return false; // 1은 소수가 아님
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    if (n % i === 0) return false; // 약수가 발견되면 소수가 아닌 것
  }
  return true;
}

const solution = (num) => {
  let answer = [];
  for (x of num) {
    let reverseNum = x.toString().split('').reverse().join('');
    if (isPrime(parseInt(reverseNum))) {
      answer.push(parseInt(reverseNum));
    }
  }
  return answer;
}

const num = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(num));
