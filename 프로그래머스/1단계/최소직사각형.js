sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

function solution(sizes) {
  const w = [];
  const h = [];
  sizes.forEach((d) => {
    if (d[0] < d[1]) {
      [d[0], d[1]] = [d[1], d[0]];
    }
    w.push(d[0]);
    h.push(d[1]);
  });

  return Math.max(...w) * Math.max(...h);
}

console.log(solution(sizes));
