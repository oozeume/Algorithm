function getCombination(arr, selectNumber) {
  const result = [];
  if (selectNumber === 1) return arr.map(el => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombination(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el].join(""));
    result.push(...attached);
  });

  return result;
}

function solution(orders, course) {
  orders = orders.map(v => v.split("").sort().join(""));
  const orderMap = orders.map(v => v.split(""))

  const pResult = course.map(v => {
    const courseArr = orderMap.map(v1 => getCombination(v1, v))
    return courseArr
  }).flat(2);

  const pPickResult = [...new Set([...pResult])];

  const answer = pPickResult.map(v => {
    let count = 0;
    pResult.forEach(v1 => {
      if (v1 === v) count++;
    })
    return [count, v]
  }).sort((a, b) => b[0] - a[0]);


  let stack = [];

  for (let i = 0; i < course.length; i++) {
    let arr = [];
    let max = 0;
    for (let j = 0; j < answer.length; j++) {
      if (answer[j][1].length === course[i] && answer[j][0] > 1) {
        max = Math.max(max, answer[j][0]);
        if (answer[j][0] >= max) arr.push(answer[j][1])
      }
    }
    stack.push(...arr)
  }
  return stack.sort();
}

const orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"]
const course = [2, 3, 5];

console.log(solution(orders, course));