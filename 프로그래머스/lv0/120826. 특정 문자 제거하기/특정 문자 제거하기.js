function solution(my_string, letter) {
    var answer = '';
    
    let words = my_string.split('').filter(e => e !== letter)
    answer = words.join('')
    
    return answer;
}