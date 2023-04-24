function solution(money) {
    var answer = [];
    let possible = Math.floor(money / 5500)
    
    answer.push(possible)
    answer.push(money - 5500 * possible)
    
    return answer;
}