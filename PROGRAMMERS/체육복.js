function solution(n, lost, reserve) {
  // 도난당한 학생 중에서 여벌 체육복이 없는 경우만 찾기
  const realLost = lost.filter((s) => (reserve.indexOf(s) === -1));
  // 여벌 체육복이 있는 학생 중에서 도난당하지 않은 경우만 찾기(체육복을 빌려줄 수 있는 학생)
  const realReserve = reserve.filter((s) => (lost.indexOf(s) === -1));

  realLost.sort()
  let answer = n - realLost.length; // answer 기본값 세팅

  // 도난당한 학생 각각 돌면서 체육복을 빌려줄 수 있는 학생의 번호가 있는지 찾으면서 answer에 값을 누적한다. 
  realLost.forEach(lostStudent => {
    // 도난당한 학생의 번호와 빌려줄 수 있는 학생의 번호가 -1이거나 +1인지 확인
    if (realReserve.indexOf(lostStudent - 1) >= 0) {
      answer++;
    } else if (realReserve.indexOf(lostStudent + 1) >= 0) {
      answer++;
      let reserveStudent = realReserve.indexOf(lostStudent + 1);
      realReserve.splice(reserveStudent, 1);
    }
  })

  return answer;
}

const n = 3;
const lost = [1, 2, 3];
const reserve = [1, 2, 3];
console.log(solution(n, lost, reserve));