function solution(my_string) {
    var answer = '';
    let words = my_string.split('')
    
    let filter = words.map(e => e.match(/[A-Z]/g) ? e.toLowerCase() : e.toUpperCase())
    
   answer = filter.join('')
    
    
    return answer;
}