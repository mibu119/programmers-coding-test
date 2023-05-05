function solution(myString, pat) {
    var answer = 0;
    let arr = myString.split('')
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "A"){
            arr[i] = "B"
        } else if (arr[i] === "B"){
            arr[i] = "A"
        }
    }
    
    arr.join('').includes(pat) ? answer = 1 : answer = 0
    
    return answer;
}