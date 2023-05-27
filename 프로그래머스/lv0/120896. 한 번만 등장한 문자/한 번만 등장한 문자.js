function solution(s) {
    var answer = [];
    
    s.split('').forEach(e => s.lastIndexOf(e) === s.indexOf(e) && answer.push(e))
    
    return answer.sort().join('');
}