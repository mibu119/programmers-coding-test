function solution(arr) {
    for(let e of arr){
        if(e.length < arr.length){
            while(e.length < arr.length){
                e.push(0)
            }
        } else if(e.length > arr.length){
            let newE = new Array(e.length).fill(0)
            while(e.length > arr.length){
                arr.push(newE)
            }
        }
    }
    return arr;
}