function solution(s) {
  const lowStr = s.toLowerCase().split("");

  let pCount = 0;
  let yCount = 0;
  lowStr.forEach((d) => {
    if (d === "y") yCount++;
    else if (d === "p") pCount++;
  });

  return pCount == yCount;
}

//function numPY(s){
//   return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// }
