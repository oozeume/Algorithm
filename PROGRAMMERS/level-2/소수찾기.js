const solution = (numbers) => {
  let answer = new Set();
  let arr = numbers.split('');

  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const permutation = (arr, fixed) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newFixed = fixed + arr[i];
        const copyArr = arr.slice();
        copyArr.splice(i, 1);

        if (!answer.has(parseInt(newFixed)) && isPrime(parseInt(newFixed))) {
          answer.add(parseInt(newFixed)) //newFixed 조합을 answer에 추가
        }
        permutation(copyArr, newFixed);
      }
    }
  }
  permutation(arr, '');
  return answer.size;
}

console.log(solution("17"));