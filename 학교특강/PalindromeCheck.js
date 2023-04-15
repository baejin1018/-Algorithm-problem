const solution = (str) => {
  const str2 = str.trim().replace(/(\s*)/g, "");
  const reverseStr = str2.split("").reverse().join("");
  if (str2 == reverseStr) return true;
  return false;
};
console.log(solution("rac ec ar"));
