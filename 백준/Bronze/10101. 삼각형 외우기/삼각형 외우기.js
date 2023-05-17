const fs = require('fs');
const [a,b,c] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let setArr = new Set([a,b,c])
let answer 

if(a === 60 && b === 60 && c === 60) answer = 'Equilateral'
if(a+b+c === 180 && setArr.size === 2) answer = 'Isosceles'
if(a+b+c === 180 && setArr.size === 3) answer = 'Scalene'
if(a+b+c !== 180) answer = "Error"

console.log(answer)