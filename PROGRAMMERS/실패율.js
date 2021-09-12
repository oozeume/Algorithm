// const solution = (N, stages) => {
//   let answer = [];
//   // 전체 스테이지를 담을 배열 만든다.
//   let stage = [1, 2, 3, 4, 5];

//   let failPlayer = 0;
//   let point = [];
//   let totalNum = stages.length;
//   let leftPlayer = 0;

//   for (let i = 0; i < stage.length; i++) {
//     for (let j = 0; j < stages.length; j++) {
//       if (stage[i] === stages[j]) {
//         failPlayer++;
//       }
//     }
//     if (stage[i] === 1) {
//       leftPlayer = totalNum;
//       point.push(failPlayer / leftPlayer);
//       failPlayer = 0;
//     } else {
//       leftPlayer = totalNum - failPlayer;
//       point.push(failPlayer / leftPlayer);
//       failPlayer = 0;

//     }
//   }
//   // 여기 상태에서 point는 stage순서대로 배치되어있다. 
//   // 여기서 한번 더 가공해서 각 스테이지 순서를 찾아주어야한다. 
//   let real = point.sort((a, b) => b - a);

//   // 현재 real에 있는데 point에서 몇 번째 자리인지 indexOf로 찾는다. 
//   console.log(real)
// }


const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];


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

console.log(solution(N, stages));

