function solution(n, k) {
    var answer = [];
    
    for(let i = 1; i <= n; i++){
        if(n >= i * k)
        answer.push(i * k)
    }
    
    return answer;
}