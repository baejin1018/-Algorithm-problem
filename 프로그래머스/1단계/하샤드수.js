function solution(x) {
  const xArr = String(x).split("").map(Number);
  const add = xArr.reduce((a, b) => (a += b));
  return x % add == 0;
}
