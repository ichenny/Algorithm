function solution(n) {
    let answer = [];
    for(let i=2; i<=n; i++){
        while(n % i ===0){
            n = n / i
            if(answer.indexOf(i) === -1 )answer.push(i)
        }
    } 
    return answer
}