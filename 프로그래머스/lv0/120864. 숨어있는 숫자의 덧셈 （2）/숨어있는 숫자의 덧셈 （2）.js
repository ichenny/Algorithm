function solution(my_string) {
    let regex = /[^0-9]/g;				
    return my_string.replace(regex, " ").split(" ").map(Number).reduce((a,b)=>a+b)
    
}