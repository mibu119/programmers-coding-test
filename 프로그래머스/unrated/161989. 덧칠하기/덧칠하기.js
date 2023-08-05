function solution(n, m, section) {
    var answer = 0;
    var part = 0;

    for (const s in section) {
        if (part < section[s]) {
            part = section[s] + (m-1);
            answer += 1;
        }
    }
    
    
    return answer;
}