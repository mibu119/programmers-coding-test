function solution(myString) {
    var answer = [];
    
    answer = myString.split('x').sort().filter(e => e !== '')
    
    return answer;
}