function solution(n) {
  const nSqrt = Math.sqrt(n);
  return Number.isInteger(nSqrt) ? (nSqrt + 1) ** 2 : -1;
}
