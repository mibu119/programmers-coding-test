function solution(sides) {
    let max = Math.max(...sides)
    let min = Math.min(...sides)
    let n1 = max - min
    let n2 = max + min
    let array = []
    while(n1 < max){
       n1++
       array.push(n1)
    }
    
    while(n2 > max){
        n2--
        array.push(n2)
    }
    
    array = [...new Set(array)]

    return array.length;
}