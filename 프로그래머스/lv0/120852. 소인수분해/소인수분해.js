function solution(n) {
    var answer = [];
    let primeFactor = 2;
    
   while(n >= 2) {
        if(n % primeFactor === 0){
            n /= primeFactor
            answer.push(primeFactor)
        } else {
            primeFactor++
        }
    } 
    
    answer = new Set(answer)
    
    return [...answer];
}