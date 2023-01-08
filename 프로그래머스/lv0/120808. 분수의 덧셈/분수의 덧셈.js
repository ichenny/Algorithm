function solution(denum1, num1, denum2, num2) {
    const getGCD = (a,b) => a % b === 0 ? b : getGCD(b, a % b)
    const multipleTop = denum1 * num2 + denum2 * num1
    const multipleBottom = num1 * num2
    
    const gcd = getGCD(multipleTop, multipleBottom)
    const top = multipleTop / gcd
    const bottom = multipleBottom / gcd
    
    return [top, bottom]
}