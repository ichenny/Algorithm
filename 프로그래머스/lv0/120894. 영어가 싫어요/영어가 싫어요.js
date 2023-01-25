function solution(numbers) {
    const eng = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for(let num of eng){
        if(numbers.indexOf(num) !== -1) numbers = numbers.replaceAll(num, eng.indexOf(num))
    }
   return Number(numbers)
}