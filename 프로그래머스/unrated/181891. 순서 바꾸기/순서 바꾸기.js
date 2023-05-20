function solution(num_list, n) {
    var answer = [];
    
    let after = num_list.slice(n, num_list.length)
    let before = num_list.slice(0, n)
    
    answer = after.concat(before)
    
    return answer;
}