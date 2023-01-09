function solution(my_string, num1, num2) {
    let answer = ''
    let str1 = my_string[num1]
    let str2 = my_string[num2]
    for(let i=0; i<my_string.length; i++){
        if(i === num1) answer += str2
        else if(i === num2) answer += str1
        else answer += my_string[i]
    }
    return answer
}