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
};
console.log(isPalindrome("0P"))
console.log(isPalindrome("A man, a plan, a canal: Panama"))
