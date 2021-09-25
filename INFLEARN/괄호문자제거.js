const solution = (str) => {
  let answer;
  let arr = [];

  for (let x of str) {
    if (x === ')') {
      // '(' 가 나올때까지 반복문으로 pop해준다
      while (arr.pop() !== '(');
    } else {
      arr.push(x);
    }
  }

  console.log(arr);
}

const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));