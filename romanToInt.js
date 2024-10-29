/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symObj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    if (s.length === 1) return symObj[s]
    //let count = symObj[s[0]]
    let count = 0

    for (let i = 0; i < s.length; i++) {
        let next = symObj[s[i+1]]
        let curr = symObj[s[i]]
        if(next>curr) {
            let sub = next-curr
            count = sub + count
            i++
        }
        else {
            count= count+ symObj[s[i]]
        }
    }
    return count
};

console.log(romanToInt('MCMXCIV')) //1994
console.log(romanToInt('III')) //3
console.log(romanToInt('LVIII')) //58
console.log(romanToInt('IV')) //4