const operationsObj = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stackNum = []
    for (let i = 0; i < tokens.length; i++) {
        if(operationsObj[tokens[i]]){
            let right = parseInt(stackNum.pop())
            let left = parseInt(stackNum.pop())
            stackNum.push(operationsObj[tokens[i]](left,right))
        }
        else {
            stackNum.push(tokens[i])
        }
    }
    return Math.floor(stackNum[0])
};
//console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
console.log(evalRPN(["0","3","/"]))
//console.log(evalRPN(["4","13","5","/","+"]))