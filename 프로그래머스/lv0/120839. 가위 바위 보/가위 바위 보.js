function solution(rsp) {
    return [...rsp].map((el) => el === "2" ? el = "0" : el === "0" ? "5" : "2").join("")
}