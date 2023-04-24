function solution(s) {
  let arr = 0;
  const splitArr = s.split("");
  for (let i = 0; i < splitArr.length; i++) {
    splitArr[i] == "(" ? arr++ : arr--;
    if (arr < 0) {
      return false;
    }
  }
  return arr != 0 ? false : true;
}
