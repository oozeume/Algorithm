function solution(cacheSize, cities) {
  let answer = 0; // 실행시간 누적
  let cacheArr = []; // 데이터가 들어간다. 캐시 체크를 하는 역할

  if (cacheSize === 0) return cities.length * 5;

  while (cities.length) {
    const city = cities.shift().toLowerCase();
    // 캐시 배열의 가장 앞의 요소를 뽑은 것 

    if (cacheArr.includes(city)) {
      cacheArr.splice(cacheArr.indexOf(city), 1);
      cacheArr.push(city);
      answer += 1;
    } else {
      if (cacheArr.length === cacheSize) {
        cacheArr.shift();
      }
      cacheArr.push(city);
      answer += 5;
    }
  }
  return answer;
}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]))