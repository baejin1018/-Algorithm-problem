function solution(n) {
  const arr = [0n, 1n];
  for (let i = 1; i < n; i++) {
    arr.push(BigInt(arr[i]) + BigInt(arr[i - 1]));
  }
  return arr[n] % 1234567n;
}
