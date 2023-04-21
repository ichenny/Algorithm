const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
inputs.shift()

function getChange(num){
    let arr = []
    let coins = [25, 10, 5, 1]
    for(let coin of coins){
        let n = parseInt(num / coin)
        arr.push(n)
        num -= n * coin
    }
    return arr.join(" ")
}

for(let input of inputs){
    console.log(getChange(+input))
}