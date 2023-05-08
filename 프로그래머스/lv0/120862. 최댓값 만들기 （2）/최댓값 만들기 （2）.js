function solution(numbers) {
    var answer = 0;
    let arr = [];
    
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            arr.push(numbers[i] * numbers[j])
        }
    }
    
    answer = Math.max(...arr)
    
    return answer;
}