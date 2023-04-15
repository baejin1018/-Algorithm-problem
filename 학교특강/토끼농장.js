const solution = (num) => {
  let count = 1;
  for (let i = 1; i <= num; i++) {
    console.log(`${i}일 : ${count}마리`);
    count += 2;
  }
};
console.log(solution(5));
