function solution(array, n) {
    var answer = 0;
    let gaps = []
    array = array.sort()
    
    for(let e of array){
        let d = n - e
        gaps.push(d)
    }
    
    // gaps의 음수 양수 값이 모두 같도록 하고,
    // gaps의 i를 찾아서 해당 i와 같은 array[i]를 비교하여, 더 작은 수를 return
    gaps = gaps.map(e => e < 0 ? -e : e)
    let min = Math.min(...gaps)
    
    return array[gaps.indexOf(min)];
}