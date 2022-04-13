{
  function solution(s) {
    let answer = s.length;

    if (s.length <= 2) {
      return answer;
    } else {
      for (let i = 1; i <= Number(s.length / 2); i++) {
        let str = "" // 압축한 문자열 저장
        let count = 1; // 압축한 횟수
        let tempStr = s.substr(0, i); // 몇 번째까지 압축하는지 문자열
        let index = 0; // 문자열에서 압축하기 위한 문자열의 위치

        // 내부 for문
        for (index = i; index <= s.length; index += i) {
          let nextStr = s.substr(index, i);

          if (tempStr === nextStr) {
            count += 1;
          } else {
            if (count === 1) {
              str = str + tempStr;
            } else {
              str = str + count + tempStr;
            }
            count = 1;
            tempStr = nextStr;
          }
        }

        // 내부 for문 끝나고 값 저장 및 비교
        if (count = 1) {
          str = str + tempStr;
        } else {
          str = str + count + tempStr
        }
        answer = Math.min(answer, str.length);
      }
    }
    return answer;
  }
  const s = "aabbaccc"
  console.log(solution(s));
}


// substr(start, length) : 문자열에서 특정한 구간의 문자열을 추출 - start index부터 몇개
// substring(from, to) : 문자열에서 특정한 구간의 문자열 추출 - from부터 to까지

