/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    if(s.length<=2) return s.length
    let map = new Map()
    //let evenValues = 0
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1) // if it doesnt exist, set it to 0
        //if(map.has(s[i]) && map.get(s[i])%2===0) evenValues+=2
    }
    // get the letters that have pairs numbers
    const evenValues = Array.from(map.values()).filter(value => value % 2 === 0).reduce((acc, val) => acc + val, 0)

    return (evenValues%2===0)? evenValues+1:evenValues

};
console.log(longestPalindrome('abccccdd'))
console.log(longestPalindrome('tdcc'))