function solution(i, j, k) {
    return nums = Array(j-i+1).fill().map((_,idx) => i+idx).join("").split("").filter((el)=> +el === k).length
}