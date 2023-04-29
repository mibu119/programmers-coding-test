function solution(n) {
    var answer = 0;
    
    answer = String(n).split('').map(e => Number(e)).reduce((prev, cur) => prev + cur)
    
    return answer;
}