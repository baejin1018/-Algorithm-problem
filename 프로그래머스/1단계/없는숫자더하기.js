function solution(numbers) {
  let cnt = 45;
  numbers.filter((d) => (cnt -= d));
  return cnt;
}
