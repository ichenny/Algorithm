function solution(array, n) {
    array.push(n)
    array.sort((a,b) => a-b)
    
    const index = array.indexOf(n)
    const left = Math.abs(n-array[index-1])
    const right = Math.abs(n-array[index+1])

    if(left > right) min = array[index+1]
    else min = array[index-1]

    return min
}