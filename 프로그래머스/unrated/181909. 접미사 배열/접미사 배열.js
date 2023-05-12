function solution(my_string) {
    let words = [];
    
    for(let i = 0; i < my_string.length; i++){
        words.push(my_string.slice(i, my_string.length))
    }
    words.sort()
    
    return words;
}