function solution(rsp) {
    var answer = '';
    let arr = rsp.split('')
    let empty = [];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "2"){
            empty.push("0")
        } else if(arr[i] === "0"){
            empty.push("5")
        } else if(arr[i] === "5"){
            empty.push("2")
        }
    }
    
    answer = empty.join('')
    
    return answer;
}