function solution(myStr) {
    let regexp = /[abc]/g
    let answer = myStr.split(regexp).filter(e => e !== '')
    return answer.length === 0 ? ['EMPTY'] : answer
}