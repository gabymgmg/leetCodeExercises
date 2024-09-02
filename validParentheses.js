// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if(s.length===1) return false // when str is empty
    const arrOfStr = s.split('') //  convert the str to an array
    let stack = []
    const symbolsPairs = {
        "}": "{",
        ")": "(",
        "]": "["
    }

    for (let i = 0; i < arrOfStr.length; i++) {
        if (arrOfStr[i] === "{" || arrOfStr[i] === "(" || arrOfStr[i] === "["){
            stack.push(arrOfStr[i])
        }
        else if(stack[stack.length-1]===symbolsPairs[arrOfStr[i]]){
            stack.pop()
        } else { return false}
    }
    if(stack.length===0) return true
    else return false
};
console.log(isValid("()[]{}")) 
// console.log(isValid("(])"))