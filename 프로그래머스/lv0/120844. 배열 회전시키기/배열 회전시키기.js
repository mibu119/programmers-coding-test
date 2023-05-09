function solution(numbers, direction) {
    var answer = [];

    if(direction === "right"){
        let right = numbers.pop()
        numbers.unshift(right)
        answer = numbers
    } else {
        let left = numbers.shift()
        numbers.push(left)
        answer = numbers
    }

    
    return answer;
}