function solution(n) {
    var answer = [];
    answer.push(n)
    for(let i = 0; i < n; i++){
        answer[i+1] = answer[i] % 2 !== 0 ? 3 * answer[i] + 1 : answer[i] / 2
        if(answer[i+1] === 1){
            break
        }
    }
    
        return answer;
}