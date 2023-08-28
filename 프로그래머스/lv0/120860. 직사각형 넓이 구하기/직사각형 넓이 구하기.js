function solution(dots) {
    const XDots = []
    const YDots = []
    
    
    for(let [x, y] of dots) {
        XDots.push(x)
        YDots.push(y)
    }
    
    let x = Math.max(...XDots) - Math.min(...XDots)
    let y =  Math.max(...YDots) -  Math.min(...YDots);
    
    return x * y;
}