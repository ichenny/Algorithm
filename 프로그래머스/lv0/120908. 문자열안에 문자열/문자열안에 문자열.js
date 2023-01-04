function solution(str1, str2) {
    let answer
    let isInclude = str1.search(str2)
    isInclude === -1 ? answer = 2 : answer = 1
    return answer
}