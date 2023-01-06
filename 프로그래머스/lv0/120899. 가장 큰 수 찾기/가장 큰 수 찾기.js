function solution(array) {
    let max = Math.max.apply(null, array) 
    return [max, array.indexOf(max)]
}