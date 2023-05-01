function solution(my_string, alp) {
    var answer = '';
    let word = alp.toUpperCase()
    let words = my_string.split('').filter(e => e === alp)
    
    if(!words){
        answer = my_string
    } else {
        answer = my_string.replaceAll(alp, word)
    }
   
    
    return answer;
}