// function solution(n) {
//   const arr = String(n).split("").sort().reverse();
//   let answer = "";
//   arr.forEach((i) => {
//     answer += i;
//   });
//   return Number(answer);
// }

function solution(n) {
  const answer = String(n).split("").sort().reverse().join("");
  return +answer;
}

console.log(solution(118372));
