function solution(my_string, n) {
    let answer = '';
    for(let letter of my_string){
        for(let i=0; i<n; i++){
            answer = answer + letter
        }
    }
    return answer
}