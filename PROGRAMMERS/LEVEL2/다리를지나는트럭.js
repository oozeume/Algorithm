const solution = (bridge_length, weight, truck_weights) => {
  let count = 0;
  let bridge = Array.from({ length: bridge_length }, () => 0);

  while (true) {
    bridge.shift();
    bridge.push(0);
    count += 1;

    let bridgeWeight = bridge.reduce((acc, cur) => acc + cur);

    // 다리에 들어갈 수 있으면 큐(다리)에 트럭 넣고 무게 증가
    if ((bridgeWeight + truck_weights[0]) <= weight) {
      const truck = truck_weights.shift();
      // 트럭을 다리에 올리고 다리위의 무게 더하기
      bridge[bridge_length - 1] = truck;
      bridgeWeight += truck;
    }
    // 다리에 들어갈 수 없으면 0을 넣고 뺏던거 다시 트럭배열에 넣어줌
    if (bridgeWeight === 0) {
      break;
    }
  }
  return count;
}

console.log(solution(2, 10, [7, 4, 5, 6]));