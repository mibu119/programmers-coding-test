function solution(n) {
    var answer = 0;
    let double = 0;
    
    if(n % 2 !== 0){
        for(let i = n; i > 0; i--) {
            if(i % 2 !== 0) answer += i
            }
        } else {
            for(let i = n; i > 0; i--){
                if(i % 2 === 0) answer += i ** 2
                    
            }
        }
        
    
    return answer;
}