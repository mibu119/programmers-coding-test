function solution(array) {
    var answer = 0;
    
    array.forEach(e => {
        if(e.length !== 1){
            String(e).split('').forEach(e => e === '7' && answer++)
        } else {
            e === 7 && answer++
        }
    })
    
    return answer;
}