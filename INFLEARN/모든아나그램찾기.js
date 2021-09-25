const solution = (s, t) => {
  // 아나그램이 되는 연속된 부분문자열 개수
  let answer = 0;

  let map1 = new Map(); // 문자열을 map 객체로
  let map2 = new Map(); // 부분문자열을 map 객체로

  // 찾아야하는 연속된 부분문자열을 map객체로 만듬
  for (let x of t) {
    if (map2.has(x)) {
      map2.set(x, map2.get(x) + 1);
    } else {
      map2.set(x, 1);
    }
  }

  // 슬라이딩 윈도우 할 때 길이가 3이면 2개를 먼저 세팅해 놓는 것
  let len = t.length - 1;

  for (let i = 0; i < len; i++) {
    if (map1.has(s[i])) {
      map1.set(s[i], map1.get(s[i]) + 1);
    } else {
      map1.set(s[i], 1);
    }
  }

  let lt = 0;

  // 슬라이딩 윈도우이기 때문에 rt는 len길이를 시작점으로 세팅
  // 추가해서 3개로 맞춰주고
  for (let rt = len; rt < s.length; rt++) {
    if (map1.has(s[rt])) {
      map1.set(s[rt], map1.get(s[rt]) + 1);
    } else {
      map1.set(s[rt], 1);
    }

    // 3개이니까 이제 비교가능
    if (compareMaps(map1, map2)) {
      answer++;
    }

    // 비교 이후에 왼쪽 포인터 빼주는 작업 
    map1.set(s[lt], map1.get(s[lt]) - 1); // 기존 값보다 1작게 가져와서 다시 세팅
    if (map1.get(s[lt]) === 0) {
      map1.delete(s[lt]);
    }
    lt++;
  }
  return answer;
}

const compareMaps = (map1, map2) => {
  if (map1.size !== map2.size) { // 1. 개수가 같은지 확인
    return false;
  }
  for (let [key, value] of map1) { // 2. key 값이 같은지 확인
    if (!map2.has(key) || map2.get(key) !== value) { // 3. value 값이 같은지 확인
      return false;
    }
  }
  return true;
}

const str1 = "bacaAacba";
const str2 = "abc";
console.log(solution(str1, str2));