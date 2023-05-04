function solution(myString, pat) {
    var answer = 0;
    
    let lower = myString.toLowerCase()
    let lowerPat = pat.toLowerCase()
    
    lower.includes(lowerPat) ? answer = 1 : answer = 0
    
    return answer;
}