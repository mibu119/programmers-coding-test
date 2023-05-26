function solution(num_list, n) {
    var answer = [];
    
    let nl = num_list.length / n
    for(let i = 0; i < num_list.length; i+=n){
        answer.push(num_list.slice(i, n + i))
    }
    
    return answer;
}