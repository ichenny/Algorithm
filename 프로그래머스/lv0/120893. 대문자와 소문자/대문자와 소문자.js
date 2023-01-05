function solution(my_string) {
    let arr = [] 
    for(let i=0; i<my_string.length; i++){
        let letter = my_string[i]
        if(letter === letter.toUpperCase()) arr.push(letter.toLowerCase())
        else if(letter === letter.toLowerCase()) arr.push(letter.toUpperCase())
    }
    return arr.join("")
}