const solution = (dvdCount, musicArr) => {
  let answer;

  let left = Math.max(...musicArr);
  let right = musicArr.reduce((acc, cur) => { return acc + cur }, 0);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // dvd 한장의 용량이 mid일 때, 몇 장이 될 수 있느냐를 구해야한다.
    if (count(musicArr, mid) <= dvdCount) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;

}

const count = (musicArr, mid) => {
  let count = 1; // dvd 한 장은 기본적으로 필요하기 때문에 1로 초기화
  let sum = 0;

  for (let x of musicArr) {
    if (sum + x > mid) {
      count++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return count;
}

const dvdCount = 3;
const musicArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(dvdCount, musicArr));