/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length ===1) return true
    const letterRegex = /[a-zA-Z0-9]/
    let strStack = []
    // push it to the stack
    for (let i = 0; i < s.length; i++) {
        let curr = s[i]
        if (letterRegex.test(s[i])) strStack.push(curr.toLowerCase())
    }
    // pop it if they are equal
    for(let i=0; i<strStack.length;i++){
        if(strStack[i]!=strStack.pop()) return false
    }
    return true
}

// Improved
var isPalindrome = function(s) {
    if(s.length ===1) return true
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, '').split('') // replace all non-alphanumeric char with a space
    let i = 0
    let j = str.length-1
    // use two pointers: one for the last element and one for the first element
    // use a while to avoid unnecesary iterations
    while(i<=j){
        if(str[i]!==str[j]) return false
        i++
        j--
    }
    return true
};
console.log(isPalindrome("0P"))
console.log(isPalindrome("A man, a plan, a canal: Panama"))
