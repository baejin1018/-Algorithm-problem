function solution(A, B) {
  const reverseA = A.sort((a, b) => {
    return a - b;
  });
  const sortB = B.sort((a, b) => {
    return b - a;
  });
  let answer = 0;
  reverseA.forEach((item) => {
    answer += item * sortB[0];
    sortB.splice(0, 1);
  });
  return answer;
}
