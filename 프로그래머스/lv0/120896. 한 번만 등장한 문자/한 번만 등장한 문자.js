function solution(s) {
    return [...s].filter((el) => s.indexOf(el) === s.lastIndexOf(el)).sort().join("")
}