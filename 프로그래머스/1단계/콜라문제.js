function solution(a, b, n) {
  let result = 0;
  let s = 0;
  while (1) {
    result += Math.floor(n / a) * b;
    s = n % a;
    n = Math.floor(n / a) * b + s;
    if (n / a < 1) break;
  }
  return result;
}
