const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v=>+v)[0]

const number = parseInt(input / 4)

let answer = ""

for(let i=1; i<=number; i++){
    answer += "long "
}

answer += "int"

console.log(answer)