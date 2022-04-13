const solution = (budget, product) => {
  let answer = 0;
  let n = product.length;

  product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1])); // 총합 순서대로 오름차순 정렬 먼저해주기

  // for문 돌면서 모든 상품이 한 번씩 할인받는 경우 해보기
  for (let i = 0; i < n; i++) {
    // 전체 예산 구하기
    let money = budget - (product[i][0] / 2 + product[i][1]); // 할인받은 금액을 전체 예산에서 뺀다.(산 경우로 계산)
    let count = 1; // 위의 계산으로 1개는 계산했다는 가정으로 1부터 시작함
    for (let j = 0; j < n; j++) {
      if (j !== i && (product[j][0] + product[j][1]) > money) break; // 사려고하는 것이 남은 예산보다 큰 경우 break;
      if (j !== i && (product[j][0] + product[j][1]) <= money) { // 남은예산보다 작거나 같아야한다.
        money -= (product[j][0] + product[j][1]); // 전체에서 비용 빼주기
        count++; // 상품 개수 카운팅
      }
    }
    answer = Math.max(answer, count);
  }
  return answer;
}

const budget = 28;
const product = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(budget, product));