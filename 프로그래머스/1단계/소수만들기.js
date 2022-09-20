const isPrime = (num) => {
  if (num == 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

function solution(nums) {
  let cnt = 0;
  const numLength = nums.length;
  for (let i = 0; i < numLength; i++) {
    for (let j = i + 1; j < numLength; j++) {
      for (let k = j + 1; k < numLength; k++) {
        console.log(nums[i] + nums[j] + nums[k]);
        if (isPrime(nums[i] + nums[j] + nums[k])) cnt++;
      }
    }
  }
  return cnt;
}
