function solution(t, p) {
    var answer = 0;
    let numP = Number(p)
    
    for(let i = 0; i < t.length - p.length + 1; i++){
        const sliceT = t.slice(i, p.length+i)
        const numT = Number(sliceT)
        
        if(numT <= numP){
            answer++
        }
    }
    
    return answer;
}