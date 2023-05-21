function solution(l, r) {
    var answer = [];
    
    for(let i = l; i <= r; i++){
        if(i % 5 !== 0) continue
        let char = String(i)
        if(![...char].every(e => e === '0' || e === '5')) continue
        answer.push(i)
    }
    
    console.log(answer)
    
    return answer.length ? answer : [-1];
}