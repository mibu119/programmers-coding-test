function solution(arr) {
    if(arr.length & arr.length - 1 !== true){
        if(arr.length % 2 !== 0){
            while(arr.length & arr.length - 1){
                arr.push(0)
            }
        }
        return arr
    } else {
        while(arr.length & arr.length - 1){
            arr.push(0)
        }
        return arr
    }
}