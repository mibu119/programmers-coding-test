// function solution(k, m, score) {
//     score.sort((a,b) => b - a)
//     let result = []
//     for(let i = 0; i < score.length; i += m){
//         result.push(score.slice(i, i+m))
//     }
//     result = result.filter((arr) => arr.length === m).map((e) => Math.min(...e) * m).reduce((a,b) => (a+b))
    
//     return result;
// }

function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let sum = 0;
    let min = Infinity;

    for (let i = 0; i < score.length; i++) {
        min = Math.min(min, score[i]);
        if ((i + 1) % m === 0) {
            sum += min * m;
            min = Infinity;
        }
    }

    return sum;
}
