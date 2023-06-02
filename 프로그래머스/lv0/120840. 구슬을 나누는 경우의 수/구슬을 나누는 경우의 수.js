function solution(balls, share) {

    let ballCases = factorial(balls);
    let shareCases = factorial(share)
    let leftCases = factorial(balls - share)
    let answer = ballCases / (shareCases * leftCases)
    
    
    return Math.round(answer);
}

function factorial (n){
     var result = 1;
    for(var i=2; i<=n; i++) result *= i;
    return result;
} 