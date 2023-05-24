function solution(intStrs, k, s, l) {
    var answer = [];
    
    for(const intStr of intStrs){
        let int = Number(intStr.substr(s, l))
        int > k && answer.push(int)
    }
    
    return answer;
}