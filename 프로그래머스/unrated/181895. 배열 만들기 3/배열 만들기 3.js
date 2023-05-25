function solution(arr, intervals) {
    var answer = [];
    let [a, b] = [...intervals]
    
    answer = arr.slice(a[0], a[1] + 1).concat(arr.slice(b[0], b[1] + 1))
    
    return answer;
}