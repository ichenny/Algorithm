function solution(numbers, direction) {
    let answer = [];
    if( direction === 'right') {
        for(let i=0; i<numbers.length-1; i++) {
            answer[0] = numbers[numbers.length-1]
            answer[i+1] = numbers[i]
        }
    }
    if( direction === 'left') {
        for(let i=0; i<numbers.length -1; i++){
            answer[i] = numbers[i+1]
        }
        answer.push(numbers[0])
    }    
    return answer
}