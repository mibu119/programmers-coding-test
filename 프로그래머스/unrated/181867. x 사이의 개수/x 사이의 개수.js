function solution(myString) {
    var answer = [];
    
    answer = myString.split('x').map(e => e.length)
    
    return answer;
}