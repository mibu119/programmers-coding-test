function solution(strArr) {
    var answer = [];
    
    for(let i = 0; i < strArr.length; i++){
        if(i % 2 !== 0){
            let big = strArr[i].toUpperCase()
            answer.push(big)
        } else {
            let small = strArr[i].toLowerCase()
            answer.push(small)
        }
    }
    
    return answer;
}