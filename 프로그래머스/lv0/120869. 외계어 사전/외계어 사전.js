function solution(spell, dic) {
    return dic.filter(a => spell.every(b => a.includes(b))).length ? 1 : 2;
}