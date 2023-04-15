//피보나치 수열 바텀업 방식
const solution = (num) => {
  const arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr.push((arr[i] = arr[i - 1] + arr[i - 2]));
  }
  return arr[num];
};
console.log(solution(80));
