function solution(array) {
    var answer = 0;
    
    let set = array.sort((a, b) => a - b)
    console.log(set)
    answer = set[Math.floor(set.length/2)]
    
    return answer;
}