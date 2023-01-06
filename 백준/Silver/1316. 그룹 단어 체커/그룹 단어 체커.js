const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input.shift())

const replace = (str) => {
    let res = '';
    let count = 1;
    for(let i = 0; i < str.length; i++){
      let cur = str[i];
      let next = str[i + 1];
      if(cur !== next) res += cur
   }
    return res
}

let replacedArr = input.map((el) => replace(el))

let count = 0

for(let word of replacedArr){
let isGroup = []
    for(let i=0; i<word.length; i++){
        if(word.indexOf(word[i]) === word.lastIndexOf(word[i])) isGroup.push(true)
        else isGroup.push(false)
    }
    if(isGroup.indexOf(false) === -1) count++
}

console.log(count)