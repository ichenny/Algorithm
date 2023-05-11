const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input.shift().split(" ").map(Number)
const c = +input.shift()
const n0 = +input.shift()

b <= (c-a) * n0 && c>=a ? console.log(1) : console.log(0)