// function solution(my_string) {
//     var answer = [];
    
//     let constructor = {
//         0 : 'A',
//         1 : 'B',
//         2 : 'C',
//         3 : 'D',
//         4 : 'E',
//         5 : 'F',
//         6 : 'G',
//         7: 'H',
//         8: 'I',
//         9: 'J',
//         10: 'K',
//         11: 'L',
//         12: 'M',
//         13: 'N',
//         14: 'O',
//         15: 'P',
//         16: 'Q',
//         17: 'R',
//         18: 'S',
//         19: 'T',
//         20: 'U',
//         21: 'V',
//         22: 'W',
//         23: 'X',
//         24: 'Y',
//         25: 'Z',
//         26: 'a',
//         27: 'b',
//         28: 'c',
//         29: 'd',
//         30: 'e',
//         31: 'f',
//         32: 'g',
//         33: 'h',
//         34: 'i',
//         35: 'j',
//         36: 'k',
//         37: 'l',
//         38: 'm',
//         39: 'n',
//         40: 'o',
//         41: 'p',
//         42: 'q',
//         43: 'r',
//         44: 's',
//         45: 't',
//         46: 'u',
//         47: 'v',
//         48: 'w',
//         49: 'x',
//         50: 'y',
//         51: 'z'
//     }
//     let strings = [...my_string]
//     answer = new Array(52).fill(0).map((e, i) => {
//         if(constructor[i] === strings[i]){
//             e++;
//         }
//     })
    
//     return answer;
// }

function solution(my_string) {
    let alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var answer = new Array(52).fill(0);
    for (let i = 0; i < my_string.length; i++) {
        answer[alp.indexOf(my_string[i])]++;
    }
    return answer;
}
