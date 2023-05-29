function decimalToBinary(decimal) {
  if (decimal === 0) {
    return '0';
  }
  
  let binary = '';
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  
  return binary;
}

function solution(bin1, bin2) {
    var answer = '';
    
    let first = bin1.split('').reverse().map((e, i) => e !== '0' && 2**i).reduce((a, b) => a+b)
    let second = bin2.split('').reverse().map((e, i) => e !== '0' && 2**i).reduce((a, b) => a+b)
    let sum = first + second
    
    const binary = decimalToBinary(sum)
    
    return binary;
}