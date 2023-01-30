function solution(my_str, n) {
    let answer = []
    for(let i=0; i<Math.floor(my_str.length/n); i++){
        answer.push(my_str.substring(n*i,n*(i+1)))
    }
    
    
    let last = my_str.length % n
    if(last !== 0){
    let lastStr= my_str.substring(my_str.length - last)
    answer.push(lastStr)
    }
    return answer
    
    // return answer
}