function solution(my_string, num1, num2) {
    var answer = '';
    
    let words = [...my_string]
    words.splice(num1, 1, my_string[num2])
    words.splice(num2, 1, my_string[num1])
    
    return answer = words.join("");
}