function solution(s) {
  const arr = s.split("");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result[result.length - 1] == arr[i]) {
      result.pop();
    } else {
      result.push(arr[i]);
    }
  }
  return result.length == 0 ? 1 : 0;
}
