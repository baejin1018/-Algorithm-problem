function solution(k, m, score) {
  let result = 0;
  const arr = score.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    let min = arr[0];

    if (arr[i] < min) min = arr[i];
    if ((i + 1) % m == 0) {
      result += min * m;
      min = 0;
    }
  }
  return result;
}
