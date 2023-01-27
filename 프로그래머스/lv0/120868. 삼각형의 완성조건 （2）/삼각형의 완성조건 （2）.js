function solution(sides) {
    let [a,b] = sides
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    let long = max + min - 1
    let short = max - min + 1
    let answer = long - short + 1
    return answer
}