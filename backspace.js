/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sCopy = []
    let tCopy = []
    for(let char of s){
        if( char === '#' ) sCopy.pop()
        else sCopy.push(char)
    }
     for(let char of t){
        if( char === '#' ) tCopy.pop()
        else tCopy.push(char)
    }
    return sCopy.toString()===tCopy.toString()
};

console.log(backspaceCompare('ab##', 'c#d#')) //true
console.log(backspaceCompare('a#c', 'b')) // false
console.log(backspaceCompare("ab#c", "ad#c")) // true
console.log(backspaceCompare("a##c", "#a#c")) // true
