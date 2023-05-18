const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop()
let answer = []
for(let tri of input){
    [a,b,c] = tri.split(" ").map(Number)
    let setTri = new Set([a,b,c])
    let max = Math.max(a,b,c)
    
    if(max >= a+b+c-max) answer.push("Invalid")
    else if(setTri.size === 1) answer.push("Equilateral")
    else if(setTri.size === 2) answer.push("Isosceles")
    else if(setTri.size === 3) answer.push("Scalene")
}
console.log(answer.join("\n"))