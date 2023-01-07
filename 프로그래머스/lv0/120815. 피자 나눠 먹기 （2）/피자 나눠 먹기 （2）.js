function solution(n) {
    const getGCD = (a,b) => a%b === 0 ? b : getGCD(b, a%b)
    return n / getGCD(n, 6)
    
}