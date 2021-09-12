const solution = (N, stages) => {
  let answer = [];

  // 인원수
  let totalNum = stages.length;

  for (let i = 1; i <= N; i++) {
    // 현재 스테이지에 도달한 인원 찾기
    let stageNum = stages.filter(ele => ele === i).length;

    // 실패율 기본 세팅
    let failRatio = 0;

    // 실패율 계산
    if (stageNum === 0) {
      failRatio = 0;
    } else {
      failRatio = (stageNum) / totalNum;
    }

    // 인원수에서 현재 스테이지에 있는 인원 빼주기
    totalNum -= stageNum;
    answer.push({ idx: i, ratio: failRatio });
  }

  // 정렬
  answer.sort((a, b) => {
    // 실패율이 같다면 오름차순 정렬
    if (a.ratio === b.ratio) {
      return a.idx - b.idx;
    } else {
      return b.ratio - a.ratio;
    }
  })
  return answer.map(ele => ele.idx);
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N, stages));

