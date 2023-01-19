function solution(spell, dic) {
    let onlyOnce = dic.filter(el => el.length === spell.length)
    let isInclude = onlyOnce.filter((el) => spell.every((v) => el.includes(v)))
    return isInclude.length > 0 ? 1 : 2
}