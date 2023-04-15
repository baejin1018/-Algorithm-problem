// 눈덩이 수열을 입력받고 등비수열로 늘어나는 변화의 값을 리스트로 출력하는 함수를 작성하라.
// [입력]
// 자연수 n (1 ≤ n ≤ 30): 눈덩이 수열의 항의 개수
// 정수 a: 눈덩이 수열의 첫 항
// 정수 d: 눈덩이 수열의 공비
// [출력]
// 눈덩이 수열의 첫 n개의 항을 공백으로 구분하여 출력.
// [입력] [출력]
// 5 2 3 [2, 6, 18, 54, 162

const solution = (num, start, gongbi) => {
  const answer = [start];
  for (let i = 1; i <= num; i++) {
    answer.push(answer[i - 1] * gongbi);
  }
  return answer;
};
console.log(solution(5, 2, 3));
