/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let map = new Map()
    let evenValues = 0
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1) // if it doesnt exist, set it to 0
        if(map.get(s[i])%2===0) evenValues+=2
    }
    // used to handle the case where the longestPalindrome is odd-length
    return (s.length > evenValues)? evenValues += 1 : evenValues
};
console.log(longestPalindrome('abccccdd'))
console.log(longestPalindrome('tdcc'))