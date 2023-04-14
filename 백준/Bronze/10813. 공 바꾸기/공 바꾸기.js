const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [m,n] = input.shift().split(" ").map(v=>+v)
const arr = Array(m).fill(0).map((_, i) => i+1)

for(let i=0; i<n; i++){
    const [a,b] = input[i].split(" ").map(v=>+v)
    const tmp = arr[a-1]
    arr[a-1] = arr[b-1]
    arr[b-1] = tmp
}
console.log(arr.join(" "))