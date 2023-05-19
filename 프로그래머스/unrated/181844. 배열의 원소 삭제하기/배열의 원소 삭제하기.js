function solution(arr, delete_list) {
    var answer = [];
    
    // arr 요소 중 delete_list에 포함되지 않은 요소는 answer에 푸쉬한다.
  
        for(let i = 0; i < arr.length; i++){
            !delete_list.includes(arr[i]) && answer.push(arr[i])
        }
    arr
    
    return answer;
}