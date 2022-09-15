function solution(x, n) {
  const answer = [];
  for (let i = 1; n >= i; i++) {
    answer.push(i * x);
  }
  return answer;
}

console.log(solution(2, 5));
