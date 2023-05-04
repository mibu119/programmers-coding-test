function solution(hp) {
    var answer = 0;
    
    let ant2 = 0;
    let ant3 = 0;
    
    let ant = {
        1: 5,
        2: 3,
        3: 1
    }
    
    let ant1 = Math.floor(hp / ant[1])
    let left = hp % ant[1]
    
    if(left !== 0){
        ant2 = Math.floor(left / ant[2])
    }
    
    let left2 = left % ant[2]
    if(left2 !== 0){
        ant3 = Math.floor(left2 / ant[3])
    }
    
    answer = ant1 + ant2 + ant3
    
    return answer;
}