function solution(arr) {
  return (
    arr.reduce((a, i) => {
      return (a += i);
    }, 0) / arr.length
  );
}
