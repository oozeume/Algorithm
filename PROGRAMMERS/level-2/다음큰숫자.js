const solution = (n) => {
  let binary = n.toString(2);
  let count = 0;

  // count : n의 이진수에서 1의 개수
  for (let x of binary) {
    if (x === '1') count++;
  }

  while (true) {
    n += 1;
    let bigNumBinary = n.toString(2);
    let bigNumCount = 0;

    // 다음 큰 숫자의 count
    for (let x of bigNumBinary) {
      if (x === '1') bigNumCount++;
    }

    if (count === bigNumCount) break;
  }
  return n;
}

console.log(solution(15));