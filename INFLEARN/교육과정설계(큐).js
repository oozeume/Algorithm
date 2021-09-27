const solution = (list, plan) => {
  let answer = "YES";
  let queue = list.split('');

  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) {
        return "NO";
      } else {
        return answer;
      }
    }
  }
}

const list = "CBA";
const plan = "CBDAGE";
console.log(solution(list, plan));