function solution(n) {
    return Array(n).fill().map((_,i) => i+1).filter((el) => n%el ===0)
}