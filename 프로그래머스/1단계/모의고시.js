answers = [1, 2, 3, 4, 5, 2, 3, 4, 5];
answers1 = [1, 3, 2, 4, 2];

function solution(answers) {
  const patternOne = [1, 2, 3, 4, 5];
  const patternTwo = [2, 1, 2, 3, 2, 4, 2, 5];
  const patternThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const patternOneL = patternOne.length;
  const patternTwoL = patternTwo.length;
  const patternThreeL = patternThree.length;
  const count = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === patternOne[i % patternOneL]) count[0] += 1;
    if (answers[i] === patternTwo[i % patternTwoL]) count[1] += 1;
    if (answers[i] === patternThree[i % patternThreeL]) count[2] += 1;
  }

  const max = Math.max(...count);
  const maxIndex = [];

  count.forEach((d, i) => {
    if (d == max) maxIndex.push(i + 1);
  });
  return maxIndex;
}

console.log(solution(answers));
