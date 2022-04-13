const solution = (M, a) => {
  // 연속부분수열의 합이 M이하가 되는 경우가 몇번인지 카운팅
  let answer = 0;
  let sum = 0;
  let end = 0;

  // 이거 어떻게해야할지 모르겠는데??
  for (let start = 0; start < a.length; i++) {
    if (a[start] < 5) {

      answer++;
    }
  }

  const M = 5;
  const a = [1, 3, 1, 2, 3];
  console.log(solution(M, a));
