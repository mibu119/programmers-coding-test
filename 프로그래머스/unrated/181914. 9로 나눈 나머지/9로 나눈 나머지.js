function solution(number) {
    var answer = 0;
    let sum = number.split('').map(e => Number(e)).reduce((a, b) => a + b)
    
    return answer = sum % 9;
}