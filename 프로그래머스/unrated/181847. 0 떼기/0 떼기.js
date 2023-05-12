function solution(n_str) {
    var answer = '';
    let num = 0;
    
    for(let i = 0; i < n_str.length; i++){
        if(n_str[i] !== '0'){
            num = i
            break
        }
    }

    answer = n_str.slice(num, n_str.length + 1)
    
    return answer;
}