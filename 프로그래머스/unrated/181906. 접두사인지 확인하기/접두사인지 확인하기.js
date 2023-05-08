function solution(my_string, is_prefix) {
    var answer = 0;
    let words = [];
    
    for(let i = 1; i <= my_string.length; i++){
        words.push(my_string.slice(0, i))
    }
    
    if(words.includes(is_prefix)){
        answer = 1
    } else {
        answer = 0
    }
    
    
    return answer;
}