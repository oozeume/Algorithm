let solution = (s, n) => {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    // 입력되는 문자열 s가 공백인지 먼저 찾아주고, 대문자인지 소문자인지 확인 후 인덱스 찾는다
    let text = s[i];
    if (text == ' ') {
      answer += ' ';
      continue;
    }
    let textAll = upper.includes(text) ? upper : lower;
    let idx = textAll.indexOf(text) + n;
    if (idx >= textAll.length) {
      idx -= textAll.length;
    }
    answer += textAll[idx];
  }
  return answer;
};

console.log(solution('a B z', 4));
