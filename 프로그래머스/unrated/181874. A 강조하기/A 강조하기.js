function solution(myString) {
    var answer = '';
    
    let arr = myString.split('')
    
    let filter = arr.map(e => e.match(/[B-Z]/g) ? e.toLowerCase() : e)
    
    answer = filter.join('').replaceAll("a", "A")
    
    return answer;
}