const solution = (s) => {
  let answer = '';
  let string = s.split('');
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      answer += string[i].toUpperCase();
    } else {
      answer += string[i].toLowerCase();
    }
  }

  return string;
}

const s = "try hello world";
console.log(solution(s));