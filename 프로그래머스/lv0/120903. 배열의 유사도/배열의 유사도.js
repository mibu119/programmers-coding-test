function solution(s1, s2) {
    var answer = 0;
    
    for(i = 0; i < s2.length; i++){
            if(s1.includes(s2[i])){
                answer += 1
            }
    }
    
    return answer;
}