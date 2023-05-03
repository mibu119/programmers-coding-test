function solution(numbers, n) {
    var answer = 0;
    let sum = 0;
    
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
        
        if(sum > n){
            answer = sum
            break
        }
    }
    
    return answer;
}