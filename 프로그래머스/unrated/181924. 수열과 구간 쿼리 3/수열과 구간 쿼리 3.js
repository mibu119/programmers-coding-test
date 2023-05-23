function solution(arr, queries) {
    
    for(let [a,b] of queries){
        // i가 a랑 같은 요소와 b랑 같은 요소의 위치 변경 
        let temp = arr.find((_, i) => i === a)
        let tempIdx = arr.findIndex((_, i) => i === a)
        let change = arr.find((_, i) => i === b)
        let changeIdx = arr.findIndex((_, i) => i === b)
        
        temp = arr[tempIdx]
        arr[tempIdx] = arr[changeIdx]
        arr[changeIdx] = temp
        console.log(`현재값: ${temp}, 현재인덱스: ${tempIdx}, 바꿀값:${change}, 바꿀인덱스: ${changeIdx}`)
    }
    
    console.log(arr)
    
    return arr;
}