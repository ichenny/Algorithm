const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n,m] = inputs.shift().split(" ").map(Number)
let arr = Array(n).fill(0).map((_,i)=>i+1)

for(let input of inputs){
    const [s, e, m] = input.split(" ").map(Number)
    const mod = [...arr.slice(m-1,e), ...arr.slice(s-1, m-1)]
    for(let i=0; i<mod.length; i++){
        arr[i+s-1] = mod[i]
    }
}
console.log(arr.join(" "))