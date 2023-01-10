function solution(age) {
    let alphabet = 'abcdefghij'
    return age.toString().split("").map((el) => alphabet[+el]).join("")
}