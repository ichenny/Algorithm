function solution(n) {
    const getFacto = (number) => {
        return Array(number).fill().map((_, i) => i+1).reduce((a,b) => a*b)
    }
    
    let factoArr = Array(10).fill(0).map((_, i) => getFacto(i+1))
    
    let arr = [...factoArr]
    arr.push(n)
    arr.sort((a,b) => a-b)
    
    let index
    
    if(factoArr.indexOf(n) === -1) index = arr.indexOf(n)
    else index = arr.indexOf(n) + 1
    
    return index
}