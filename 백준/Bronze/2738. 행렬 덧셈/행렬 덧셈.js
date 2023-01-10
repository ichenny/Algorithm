const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input.shift().split(" ").map(Number)
let result = []

let arr1 = input.map((el)=>el.split(" ").map(Number)).slice(0, n)
let arr2 = input.map((el)=>el.split(" ").map(Number)).slice(n)

for(let i=0; i<n; i++){
    let line = []
    for(let j=0; j<m; j++){
        let sum = arr1[i][j] + arr2[i][j]
        line.push(sum)
    }
    result.push(line)
}

for(let hor of result){
    let str = ""
    for(let el of hor){
        str += " " + String(el) 
    }
    console.log(str.trim())
}