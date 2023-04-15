const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [m,n] = input.shift().split(" ").map(v=>+v)
const arr = Array(m).fill(0).map((_,i) => i+1)

for(let i=0; i<n; i++){
    const [a,b] = input[i].split(" ").map(v=>+v)
    const copy = arr.slice(a-1, b).reverse()
    for(let j=a; j<=b; j++){
        arr[j-1] = copy[j-a]
    }
}
console.log(arr.join(" "))