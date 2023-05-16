function solution(arr1, arr2) {
    var answer = 0;
    let sum1 = arr1.reduce((a,b) => a+b)
    let sum2 = arr2.reduce((a,b) => a+b)
    
    if(arr1.length !== arr2.length){
        arr1.length > arr2.length ? answer = 1 : answer = -1
    } else {
        sum1 !== sum2 ? sum1 > sum2 ? answer = 1 : answer = -1 : answer = 0
    }
    
    return answer;
}