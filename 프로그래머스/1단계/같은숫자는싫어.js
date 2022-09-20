const arr = [1, 1, 3, 3, 0, 1, 1];
/*
function solution(arr) {
  var answer = [];

  arr.forEach((d, i) => {
    if (d != arr[i + 1]) answer.push(arr[i]);
  });
  return answer;
}
console.log(solution(arr));
*/
//===========================

function solution(arr) {
  return arr.filter((d, i) => d != arr[i + 1]);
}
console.log(solution(arr));
