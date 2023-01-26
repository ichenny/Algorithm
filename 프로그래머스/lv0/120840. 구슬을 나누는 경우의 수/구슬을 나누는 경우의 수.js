function solution(balls, share) {
    function getFact(num){
        if(BigInt(num) < 1) return BigInt(1)
        return BigInt(num) * getFact(num -1)
    }
    let answer = getFact(balls) / (getFact(balls-share) * getFact(share))
    return answer
}