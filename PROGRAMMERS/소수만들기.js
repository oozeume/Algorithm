const solution = (nums) => {
  let answer = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer++;
      }
    }
  }
  return answer;
}

const isPrime = (sum) => {
  for (let i = 2; i < sum; i++)
    if (sum % i === 0) return false;
  return true;
}

const nums = [1, 2, 7, 6, 4];
console.log(solution(nums));