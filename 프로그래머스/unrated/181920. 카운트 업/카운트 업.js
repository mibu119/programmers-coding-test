function solution(start, end) {
    var answer = [];
    
    for(let i = 0; i <= end - start; i++){
        answer.push(start + i)
    }
    
    return answer;
}