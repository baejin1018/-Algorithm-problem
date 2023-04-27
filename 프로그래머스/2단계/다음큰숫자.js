function solution(n) {
  const current = n.toString(2).split("1").length;
  let result = n + 1;
  while (1) {
    if (current == result.toString(2).split("1").length) break;
    else result++;
  }
  return result;
}
