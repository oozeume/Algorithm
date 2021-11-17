const solution = (N, road, K) => {
  let arr = Array(N + 1).fill(Infinity);
  let adj = Array.from(Array(N + 1), () => Array());

  for (let [a, b, c] of road) {
    adj[a].push({ to: b, time: c });
    adj[b].push({ to: a, time: c });
  }

  // 출발 지점
  let check = [{ to: 1, time: 0 }];
  arr[1] = 0;

  while (check.length) {
    let { to } = check.pop();

    // arr에 노드별로 도착 시간 저장
    adj[to].forEach(next => {
      // next.to: 이동할 마을 / to: 현재 마을 / next.time: 이동할 마을까지 걸리는 시간
      if (arr[next.to] > arr[to] + next.time) {
        arr[next.to] = arr[to] + next.time;
        check.push(next);
      }
    });
  }

  // arr 배열에 저장된 시간 중에 K보다 작은 수 걸러서 리턴
  return arr.filter((time) => time <= K).length;
}

const road = [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]];
console.log(solution(5, road, 3));
