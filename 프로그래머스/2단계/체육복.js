function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  let end = reserve.length - 1;
  let start = 0;
  for (; start <= end; ) {
    if (lost.includes(reserve[start])) {
      lost.splice(lost.indexOf(reserve[start]), 1);
      reserve.splice(reserve.indexOf(reserve[start]), 1);

      end--;
      start--;
    } else start++;
  }
  const count = reserve.length;

  for (let i = 0; i < lost.length; i++) {
    const minus = lost[i] - 1;
    const plus = lost[i] + 1;
    if (reserve.includes(minus)) {
      reserve.splice(reserve.indexOf(minus), 1);
    } else if (reserve.includes(plus)) {
      reserve.splice(reserve.indexOf(plus), 1);
    }
    console.log(lost.length, reserve);
  }
  return n - lost.length + count - reserve.length;
}
