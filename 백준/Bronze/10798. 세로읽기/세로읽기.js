const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const maxLeng = Math.max(...input.map((el) => el.length))
let answer = ""

for(let i=0; i<maxLeng; i++){
    const word = input.map((el) => el[i]).filter((el) => el !== undefined).join("")
    answer += word
}
console.log(answer)