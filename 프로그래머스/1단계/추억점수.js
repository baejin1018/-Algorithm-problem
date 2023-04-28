function solution(name, yearning, photo) {
  const result = [];
  const score = {};
  name.forEach((v, i) => {
    score[v] = yearning[i];
  });

  for (let i = 0; i < photo.length; i++) {
    let point = 0;
    for (let j = 0; j < photo[i].length; j++) {
      const plusPoint = score[photo[i][j]] ? score[photo[i][j]] : 0;
      point += plusPoint;
    }
    result.push(point);
  }
  return result;
}
