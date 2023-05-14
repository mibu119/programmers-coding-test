function solution(binomial) {
    var answer = 0;
    
    const words = binomial.split(' ')
    
    let [one, two, three] = [...words]
    if(two === '+') {
        answer = Number(one) + Number(three)
    } else if(two === '*'){
        answer = Number(one) * Number(three)
    } else if (two === '-') {
        answer = Number(one) - Number(three)
    }
    
    return answer;
}