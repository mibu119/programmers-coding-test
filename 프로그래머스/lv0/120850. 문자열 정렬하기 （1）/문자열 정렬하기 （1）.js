function solution(my_string) {
    var answer = [];
    
    answer = my_string.split('').filter(e => e % 1 === 0).map(e => Number(e)).sort((a, b) => a-b)
    
    return answer;
}