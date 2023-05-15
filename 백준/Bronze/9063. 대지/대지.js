const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer
if(+input[0] === 1) answer = 0
input.shift()

let x = []
let y = []

for(let cor of input){
    cor = cor.split(" ").map(Number)
    x.push(cor[0])
    y.push(cor[1])
}

let xMax = Math.max(...x)
let xMin = Math.min(...x)
let yMax = Math.max(...y)
let yMin = Math.min(...y)
answer = (xMax-xMin) * (yMax-yMin)

console.log(answer)