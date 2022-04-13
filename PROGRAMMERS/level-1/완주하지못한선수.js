// 1
const solution = (participant, completion) => {
    participant.sort();
    completion.sort();
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i])
            return participant[i];
    }
}

// 2
const solution = (participant, completion) => {
    let answer = '';

    let map1 = new Map();
    let map2 = new Map();

    for (let x of participant) {
        if (map1.has(x)) { map1.set(x, map1.get(x) + 1) }
        else { map1.set(x, 1) }
    };

    for (let x of completion) {
        if (map2.has(x)) { map2.set(x, map2.get(x) + 1) }
        else { map2.set(x, 1) }
    };

    for (let [key, value] of map1) {
        if (!map2.has(key) || map2.get(key) !== value) {
            answer = key;
        }
    }
    return answer;
}

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];
console.log(solution(participant, completion));