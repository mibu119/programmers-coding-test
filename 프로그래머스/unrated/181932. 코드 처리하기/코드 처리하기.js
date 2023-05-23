function solution(code) {
    let str = ''
    let mode = 0
    for(let i = 0; i < code.length; i++){
        if(mode){
            if(code[i] !== '1' && i % 2 !== 0) str += code[i]
            if(code[i] === '1') mode = 0
        } else {
            if(code[i] !== '1' && i % 2 === 0) str += code[i]
            if(code[i] === '1') mode = 1
        }
    }
    
    return str ? str : 'EMPTY';
}