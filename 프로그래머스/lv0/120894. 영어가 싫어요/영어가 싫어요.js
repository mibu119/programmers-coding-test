function solution(numbers) {
    let arrNums = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    for(let i = 0; i < arrNums.length; i++){
        numbers = numbers.split(arrNums[i]).join(i)
        console.log(numbers)
    }
    
    return Number(numbers);
}