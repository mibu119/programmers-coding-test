function solution(n) {
    var arr = [];
    let double = 1;
    
    for(let i = 1; i <= n; i++){
        double = double * i        
        if(double <= n){
            arr.push(i)
        }
    }
    
    return arr.pop();
}