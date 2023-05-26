function solution(i, j, k) {
    var arr = [];
    
    for(let n = i; n <= j; n++){
        let string = n.toString()
        if(string.includes(k.toString())){
            if(string.length > 1){
                let filterString = string.split('').filter(e => e === k.toString())
                arr.push(filterString)
            } else {
                arr.push(string)
            }
        }
    }

    return arr.length !== 0 ? arr.flat().length : 0
}