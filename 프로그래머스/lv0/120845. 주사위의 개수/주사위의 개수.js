function solution(box, n) {
    return box.map((el) => Math.floor(el / n)).reduce((a,b) => a*b)
}