function solution(bin1, bin2) {
    let ten1 = [...bin1].reverse().map((el, i) => Number(el) === 1 ? Math.pow(2, i) : Number(el)).reduce((a,b) => a+b)
    let ten2 = [...bin2].reverse().map((el, i) => Number(el) === 1 ? Math.pow(2, i) : Number(el)).reduce((a,b) => a+b)
    let sum = ten1 + ten2
    let binSum = sum.toString(2)
    return binSum
    
}