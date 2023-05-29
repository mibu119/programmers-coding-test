function solution(num_list) {
    var answer = 0;
    
    for(let n of num_list){
        if(n !== 1){
        do {
            if(n % 2 !== 0){
               n = (n - 1) / 2
                answer++
            } else {
                n = n / 2
                answer++
            }
            } while(n !== 1)
        }
    }
    
    return answer;
}