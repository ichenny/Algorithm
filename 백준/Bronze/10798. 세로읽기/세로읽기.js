const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = ""
for(let i=0; i<15; i++){
    const word = input.map((el) => el[i]).filter((el) => el !== undefined).join("")
    answer += word
}
console.log(answer)