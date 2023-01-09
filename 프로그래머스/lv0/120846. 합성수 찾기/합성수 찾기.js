function solution(n) {
    const isMoreThanThree = num => {
        let count = 0
        for(let i=1; i<=num; i++){
            if(num % i === 0) count ++
        }
        if(count >= 3) return true
        else return false
    }
    let arr = Array(n).fill().map((_, i) => i+1)
    let answer = arr.filter((el) => isMoreThanThree(el))
    return answer.length
}