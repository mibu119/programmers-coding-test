function solution(myString) {
    var answer = '';
    
    let after = myString.split('').map(e => e.charCodeAt() > 108 ? answer += e : answer += 'l')
    
    
    return answer;
}