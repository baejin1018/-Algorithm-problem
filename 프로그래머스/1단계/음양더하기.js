function solution(absolutes, signs) {
  let rightNum = 0;
  absolutes.forEach((d, i) => {
    signs[i] ? (rightNum += d) : (rightNum -= d);
  });
  return rightNum;
}

