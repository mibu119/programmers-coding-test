function solution(a, b) {
    let answer = 0;
    if(a.MAX_SAFE_INTEGER && b.MAX_SAFE_INTEGER){
         answer = Number(a) + Number(b)
    } else {
        answer = BigInt(a) + BigInt(b)
    }
    
    
    
    return answer.toString();
}