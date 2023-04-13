const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [m,n] = input.shift().split(" ").map(v=>+v)

const baskets = Array(m).fill(0)

for(let i=0; i<n; i++){
    const [start, end, num] = input[i].split(" ").map(v=>+v)
    for(let j=start -1; j<=end-1; j++){
        baskets[j] = num
    }
}

console.log(baskets.join(" "))