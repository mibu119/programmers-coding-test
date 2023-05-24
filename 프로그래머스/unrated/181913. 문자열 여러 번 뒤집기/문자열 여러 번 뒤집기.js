function solution(my_string, queries) {
    let arr = my_string.split('')
    let letter = ''
    let piece = '';
    
    for(let [a, b] of queries){
        letter = arr.slice(a,b+1)
        arr.splice(a, letter.length, ...letter.reverse())      
    }
    
    return arr.join('');
}