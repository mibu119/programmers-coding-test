function solution(arr, queries) {
    
    for(let [s, e, k] of queries){
        for(let i = 0; s <= i && e >= i ; i++){
            if(i % k === 0){
                arr[i] = arr[i] + 1
            }
        }
    }
    
    return arr;
}