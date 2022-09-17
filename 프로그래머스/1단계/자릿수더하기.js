function solution(n) {
  const arrN = String(n).split("").map(Number);
  return arrN.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
}
