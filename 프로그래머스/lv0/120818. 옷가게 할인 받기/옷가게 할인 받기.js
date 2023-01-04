function solution(price) {
    let result
    if(100000 <= price && price < 300000) result = price * 0.95
    else if(300000 <= price && price < 500000) result = price * 0.9
    else if(price >= 500000) result = price * 0.8
    else return price
    
    return Math.floor(result)
}