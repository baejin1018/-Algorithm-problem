function solution(n, words) {
  const rightArr = [words[0]];

  for (let i = 1; i < words.length; i++) {
    const find = words.indexOf(words[i]);
    if (!rightArr.includes(words[i]) && words[i - 1].slice(-1) == words[i][0]) {
      rightArr.push(words[i]);
      continue;
    }
    return [(i % n) + 1, Math.floor(rightArr.length / n) + 1];
  }
  return [0, 0];
}
