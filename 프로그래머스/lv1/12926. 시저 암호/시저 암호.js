function solution(s, n) {
    var answer = '';
    let code = 0;
    
    for(let i = 0; i < s.length; i++){
        code = s.charCodeAt(i)
        // 대문자인 경우
        if(code >= 65 && code <= 90){
            code += n
            if(code > 90){
                code -= 26
            }
        } else if(code >= 97 && code <= 122){
            code += n
            if(code > 122){
                code -= 26
            }
        }
        let sChange = String.fromCharCode(code)
        
        answer += sChange
    }
    
    return answer;
}