function solution(my_string) {
    let regex = /[^0-9]/g;				
    let arr = (my_string.replace(regex, "!")).split("!").filter((el) => el.length > 0).map(Number)
    if(arr.length === 1) return Number(arr[0])
    else if(arr.length > 1) return arr.reduce((a,b) => a+b)
    else if(!arr.length) return 0
    
}