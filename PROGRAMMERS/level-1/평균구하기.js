const average = (arr) => {
  let answer = 0;

  for (let i of arr) {
    answer += i;
  }

  return answer / arr.length;
}

const arr = [1, 2, 3, 4];
console.log(average(arr));