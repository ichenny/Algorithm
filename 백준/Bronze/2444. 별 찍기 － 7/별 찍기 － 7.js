const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString())

for(let i=1; i<=(input*2-1); i++){
    let star = ""
    if(i <= input){
    star += " ".repeat(input-i) + "*".repeat(2*i-1)
    console.log(star)    
    }
    if(i > input){
    star += " ".repeat(i-input) + "*".repeat(2*(i-2*(i-input))-1)
    console.log(star)
    }
}
