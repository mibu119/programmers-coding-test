function solution(my_string, is_suffix) {
    var answer = 0;
    
    let words = [];
    
    for(let i = 0; i < my_string.length; i++){
        words.push(my_string.slice(i, my_string.length))
    }
    
    if(words.includes(is_suffix)){
        answer = 1
    } else {
        answer = 0
    }
    
    return answer;
}