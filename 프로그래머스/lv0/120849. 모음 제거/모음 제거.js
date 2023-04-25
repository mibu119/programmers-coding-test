function solution(my_string) {
    var answer = '';
    
    answer = my_string.replaceAll(/[aeiou]+/g, "")
    
    return answer;
}