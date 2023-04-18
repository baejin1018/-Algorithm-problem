function solution(s) {
    const answer = []
    s.split(" ").forEach((item)=>{
       const first = item.charAt(0).toUpperCase()
       const seconed = item.slice(1).toLowerCase()
       answer.push(first+seconed)
    })
    return answer.join(" ");
}