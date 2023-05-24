function solution(x1, x2, x3, x4) {
    var answer = [];
    let [...arr] = [[x1, x2], [x3, x4]]
    
    for(const [a, b] of arr) {
       if(a !== true){
           if(b !== true){
               answer.push(false)
           } else {
               answer.push(true)
           }
       } else {
           answer.push(true)
       }
    }
        
    
    return answer[0] !== false && answer[1] !== false ? true : false
}