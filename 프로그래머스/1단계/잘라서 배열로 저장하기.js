//문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
  const answer = [];
  for (let i = 1; i <= Math.ceil(my_str.length / n); i++) {
    answer.push(my_str.slice((i - 1) * n, i * n));
  }
  return answer;
}

//입출력 예 
// "abc1Addfggg4556b"	6	["abc1Ad", "dfggg4", "556b"]
// "abcdef123"	3	["abc", "def", "123"]
