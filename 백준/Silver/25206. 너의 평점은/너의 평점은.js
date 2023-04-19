const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const notP = input.map((el)=> el.split(" ")).filter((el) => el[2] !== "P")

for(let sub of notP){
    sub[1] = Number(sub[1])
    if(sub[2] === "A+") sub[2] = 4.5
    if(sub[2] === "A0") sub[2] = 4.0
    if(sub[2] === "B+") sub[2] = 3.5
    if(sub[2] === "B0") sub[2] = 3.0
    if(sub[2] === "C+") sub[2] = 2.5
    if(sub[2] === "C0") sub[2] = 2.0
    if(sub[2] === "D+") sub[2] = 1.5
    if(sub[2] === "D0") sub[2] = 1.0
    if(sub[2] === "F") sub[2] = 0.0
}

const sum = notP.reduce((sum, [_, grade, gpa]) => sum + gpa * grade, 0)
const totalGrade = notP.reduce((sum, [_, grade]) => sum + grade, 0)
const answer = (sum / totalGrade).toFixed(6)
console.log(answer)