function solution(arr) {
    var answer = [];
    // let findTwo = (e) => e === 2
    
    if(!arr.includes(2)){
        answer = [-1]
    } else {
        let first = arr.indexOf(2)
        let last = arr.lastIndexOf(2)
        answer = arr.slice(first, last + 1)
    }
    
    return answer;
}