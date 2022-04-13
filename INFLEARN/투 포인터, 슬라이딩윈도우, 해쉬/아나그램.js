const solution = (word1, word2) => {
  // 아나그램 : 알파벳 나열 순서는 다르지만 그 구성(알파벳과 그 개수)이 일치
  // 길이가 다른 두 개의 단어가 주어지면, 그 두 단어가 아나그램인지 판별
  // 대소문자 구별

  let answer = "Yes";

  // map1 을 기준 객체로 만들어 놓고 
  // map1 과 word2를 비교해서 key가 존재하는지 보고, 있으면 value 비교
  let map1 = new Map();

  for (let x of word1) {
    if (map1.has(x)) {
      map1.set(x, map1.get(x) + 1);
    } else {
      map1.set(x, 1);
    }
  }

  for (let x of word2) {
    if (!map1.has(x) || map1.get(x) === 0) {
      return "No";
    }
    map1.set(x, map1.get(x) - 1);
  }

  return answer;
}

const word1 = "abaCC";
const word2 = "Caaab";
console.log(solution(word1, word2));