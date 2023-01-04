function solution(n) {
    let isInt = Math.sqrt(n)
    return isInt === parseInt(isInt) ? 1 : 2
}