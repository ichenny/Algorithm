function solution(n) {
    const getFacto = (number) => {
        return Array(number).fill().map((_, i) => i+1).reduce((a,b) => a*b)
    }
    
    let factoArr = Array(10).fill(0).map((_, i) => getFacto(i+1))
    
    let arr = [...factoArr]
    arr.push(n)
    arr.sort((a,b) => a-b)
    
    return factoArr.indexOf(n) === -1 ? arr.indexOf(n) : arr.indexOf(n) + 1 
}