function solution(str1, str2) {
    var answer = '';
    let split1 = str1.split('')
    let split2 = str2.split('')
    
    for(let i = 0; i < str1.length; i++){
            answer += str1[i] + str2[i]
    }
    
    return answer;
}