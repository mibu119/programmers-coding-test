function solution(emergency) {
    
    let order = emergency.slice().sort((a,b) => b-a)
    
    return emergency.map(e => order.indexOf(e) + 1);
}