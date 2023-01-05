function solution(hp) {
    let general = parseInt(hp / 5)
    let soldier = parseInt((hp % 5) / 3)
    let work = parseInt(hp % 5 % 3)
    return general + soldier + work
}