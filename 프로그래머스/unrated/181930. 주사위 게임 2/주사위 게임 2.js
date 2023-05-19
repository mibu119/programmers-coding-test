function solution(a, b, c) {
    var answer = 0;
    let sum = a + b + c
    let doubleSum = a*a + b*b + c*c
    let trippleSum = a**3 + b**3 + c**3
    // 세 숫자가 모두 다를 때,
    answer = a !== b && a !== c && b !== c ? sum : 
             a === b && a === c && b === c ? (sum) * (doubleSum) * (trippleSum) :
             sum * doubleSum
    // 세 숫자 중 두 숫자는 같고, 나머지 하나는 다를 때,
    
    // 세 숫자가 모두 같을 때,
    
    return answer;
}