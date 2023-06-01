function solution(my_string) {
    let strArr = my_string.split(' ')
    let sum = Number(strArr[0]);
    
    for(let i = 1; i < strArr.length; i+=2){
        let right = Number(strArr[i+1])
        if(strArr[i] === '+'){
            sum += right
        } else {
            sum -= right
        }
    }
    
    
    return sum;
}