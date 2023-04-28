function solution(people, limit) {
  people.sort((a, b) => a - b);
  let result = 0;
  let start = 0;
  let end = people.length - 1;
  for (; start <= end; ) {
    if (people[start] + people[end] > limit) {
      result++;
      end -= 1;
    } else if (people[start] + people[end] <= limit) {
      start++;
      end--;
      result++;
    }
  }
  return result;
}
