function solution(my_string, indices) {
    var answer = '';
    
    answer = [...my_string].filter((_, i) => !indices.includes(i)).join('')
    
    return answer;
}