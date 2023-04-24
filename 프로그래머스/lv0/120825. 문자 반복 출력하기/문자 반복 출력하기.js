function solution(my_string, n) {
    var answer = '';
    
    answer = my_string.split('').map(e => e.repeat(n)).join('')
    
    return answer;
}