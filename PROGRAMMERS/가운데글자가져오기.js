const solution = (s) => {
  let n = Math.floor(s.length / 2);
  let answer;

  return s.length % 2 === 0 ? answer = s[n - 1] + s[n] : answer = s[n];
}

console.log(solution("qwer"));