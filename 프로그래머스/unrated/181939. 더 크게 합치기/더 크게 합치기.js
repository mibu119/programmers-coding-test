function solution(a, b) {
    var answer = 0;
    
    let AB = Number(a.toString() + b.toString())
    let BA = Number(b.toString() + a.toString())

    return AB > BA ? answer = AB : answer = BA
}