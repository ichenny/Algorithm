function solution(spell, dic) {
    let isInclude = dic.filter((el) => spell.every((v) => el.includes(v)))
    return isInclude.length > 0 ? 1 : 2
}