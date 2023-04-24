function solution(s) {
  let zeroCount = 0;
  let loopCount = 0;
  while (s.length > 1) {
    loopCount++;
    const temp = s.replace(/0/g, "");
    zeroCount += s.length - temp.length;
    s = temp.length.toString(2);
  }

  return [loopCount, zeroCount];
}
