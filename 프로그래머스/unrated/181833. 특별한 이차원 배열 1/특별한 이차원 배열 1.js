function solution(n) {
    let answer = Array(n).fill(Array(n).fill(0))
    
    console.log(answer)
    
    return answer.map((e, i) => {
        return e.map((e2, i2) => i2 === i ? 1 : e2)
    });
}