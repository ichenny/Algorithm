const n = require('fs').readFileSync('/dev/stdin').toString().trim()
let answer = BigInt(n)*BigInt(n-1)*BigInt(n-2) / BigInt(6)
console.log(`${answer}`, 3)