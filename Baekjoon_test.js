// vscode에서 백준 코드 결과값 확인할 수 있고, 변수할당을 쉽게 할 수 있는 방법
const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : // 예제 입력부분 (예제와 똑같이 입력!)
      `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
`
).split('\n');

const C = parseInt(input[0]); // 테스트케이스 개수

for (let i = 1; i <= C; i++) {
    const NAndGradeArr = input[i].trim().split(' '); // 배열 5개 만들어짐
    let totalGrade = 0; // 총점
    let avg = 0; // 평균
    let count = 0; // 평균을 넘는 학생수
    let proportion = 0; // 평균이 넘는 학생 비율
    for (let j = 1; j <= parseInt(NAndGradeArr[0]); j++) { 
        totalGrade += parseInt(NAndGradeArr[j]); // 5개의 총점 만들어짐
        // 1번째 인덱스부터 for문을 돌면서 totalGrade에 총점 누적
    }

    avg = totalGrade / parseInt(NAndGradeArr[0]); // 5개의 평균 찾음
    // totalGrade에 누적된 5개의 총합을 5로 나누어서 평균을 구함

    for (let k = 1; k <= parseInt(NAndGradeArr[0]); k++) {
        if (parseInt(NAndGradeArr[k]) > avg) { // 
            count++; // 점수가 평균보다 높은 학생수 카운팅
            // 배열 안에서 또 for문을 돌면서 평균보다 높으면 카운팅
        }
    }

    proportion = (count/ parseInt(NAndGradeArr[0])) * 100; // 마지막으로 평균 넘는 학생비율 구하기
    // 비율 -> 평균보다 높은 학생수 / 5 * 100
    console.log(proportion.toFixed(3) + '%'); // 소수점 세번째자리까지 보여주고 퍼센트 붙이기
}