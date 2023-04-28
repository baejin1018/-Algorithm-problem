function solution(k, tangerine) {
  const num = {};
  tangerine.forEach((v, i) => {
    let score = num[v] ? num[v] + 1 : 1;
    num[v] = score;
  });

  const arr = Object.values(num).sort((a, b) => b - a);

  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    count += arr[j];
    if (count >= k) return j + 1;
  }
}
