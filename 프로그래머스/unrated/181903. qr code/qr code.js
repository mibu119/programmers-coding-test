function solution(q, r, code) {
    var answer = '';
    let codeArr = code.split('')
    
    for(let i = 0; i < codeArr.length; i++){
        if(i % q === r){
            answer += codeArr[i]
        }
    }
    
    return answer;
}