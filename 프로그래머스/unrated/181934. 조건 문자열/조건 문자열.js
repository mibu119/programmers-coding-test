function solution(ineq, eq, n, m) {
    let sum = ineq + eq
    if(sum.includes('!')){
        sum = sum.slice(0, 1)
    }
  if(sum === '>='){
      return n >= m ? 1 : 0
  } else if(sum === '<='){
      return n <= m ? 1 : 0
  } else if(sum === '>'){
      return n > m ? 1 : 0
  } else if(sum === '<'){
      return n < m ? 1 : 0
  }
    // return `${n} ${sum} ${m}` ? 1 : 0;
}