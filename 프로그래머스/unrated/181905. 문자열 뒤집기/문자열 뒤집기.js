function solution(my_string, s, e) {    
    let arr = my_string.split('')
    let temp = arr.slice(s,e+1)
    arr.splice(s, temp.length, ...temp.reverse())
    return arr.join('')
}