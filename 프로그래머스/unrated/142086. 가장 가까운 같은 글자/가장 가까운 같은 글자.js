function solution(s) {
    let answer = [];
    let unique = [];
    
    // unique 중에 하나가 처음 나오면 -1
    // unique 중 하나가 이미 나온 숫자라면 가까이 있는 숫자의 인덱스
    for(let i = 0; i < s.length ; i++){
        if(!unique.includes(s[i])){
            answer.push(-1)
            unique.push(s[i])
        } else {
            answer.push(i - unique.lastIndexOf(s[i]));
            unique.push(s[i])
        }
    }
    
    
    return answer;
}