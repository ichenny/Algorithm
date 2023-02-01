function solution(id_pw, db) {
    let [id, pw] = id_pw
    let correctId = db.filter((el) => el[0] === id)
    let wrongPw = correctId.filter((el) => el[1] === pw) 
    
    if(!correctId.length) return 'fail'
    if(!wrongPw.length) return 'wrong pw'
    if(wrongPw) return 'login'
}