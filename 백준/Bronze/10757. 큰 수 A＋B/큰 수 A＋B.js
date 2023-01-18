const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

let answer = BigInt(a)+BigInt(b)
console.log(answer.toString())