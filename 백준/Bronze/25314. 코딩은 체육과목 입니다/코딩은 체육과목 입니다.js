const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v=>+v)[0]

const number = parseInt(input / 4)

console.log("long ".repeat(number) + "int")