answers = [2, 1, 2, 3, 2, 1, 2, 3, 2, 4, 2, 5, 4, 5, 1, 2, 3, 1, 2, 3];
answers1 = [1, 3, 2, 4, 2];

function solution(answers) {
  var answerCheck = [];
  let max = 0;
  const answer = [];

  const test = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  test.forEach((d) => {
    answerCheck.push(d.filter((n, i) => n == answers[i]));
  });

  answerCheck.forEach((d) => {
    if (d.length > max) {
      max = d.length;
    }
  });

  answerCheck.forEach((d, i) => {
    if (max <= d.length) answer.push(i + 1);
  });
  return answer;
}

console.log(solution(answers));
