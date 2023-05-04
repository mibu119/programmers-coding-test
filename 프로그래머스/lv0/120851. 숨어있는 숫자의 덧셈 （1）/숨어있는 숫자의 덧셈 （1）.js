function solution(my_string) {
    var answer = 0;
    
    let numbers = my_string.split('').filter(e => e % 1 === 0).map(e => Number(e))
    answer = numbers.reduce((a, b) => a + b)
    
    return answer;
}