function solution(s1, s2) {
    let newS1 = new Set(s1)
    let newS2 = new Set(s2)
    
    let common = [...newS1].filter((el) => newS2.has(el))
    
    return common.length
}