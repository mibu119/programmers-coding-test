function solution(num_list) {
    let last = num_list[num_list.length - 1]
    let lastBefore = num_list[num_list.length - 2]
    console.log(last - lastBefore, last * 2)
    
    if(last > lastBefore){
       num_list.push(last - lastBefore)
    } else {
       num_list.push(last * 2)
    }
    
    return num_list
}