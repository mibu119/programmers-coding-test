function solution(my_string) {
    var answer = '';
    
    answer = my_string.split('').map(e => e.toLowerCase()).sort().join('')
    
    return answer;
}