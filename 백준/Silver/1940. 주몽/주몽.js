const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input.shift()
const m = +input[0]
const numbers = input[1].split(" ").map(Number)
const arr = [...numbers]
let count = 0

for(let i=0; i<n ; i++){
    arr.splice(0,1)
    let isSum = arr.filter((el) => m-el === numbers[i])
    if(isSum.length > 0) count ++
}

console.log(count)
