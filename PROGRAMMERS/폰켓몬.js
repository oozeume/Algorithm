const solution = (nums) => {
  const selectNum = nums.length / 2;

  const possibleSelect = nums.reduce((acc, cur, idx, origin) => {
    if (origin.indexOf(cur) === idx) acc.push(cur);
    return acc;
  }, []);

  return possibleSelect.length >= selectNum ? selectNum : possibleSelect.length;
}

const nums = [3, 3, 3, 2, 2, 2];
console.log(solution(nums));