/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let elementsQty = {}
    let majorityElem = {elem:nums[0], qty:1}
    for (let i = 0; i < nums.length; i++) {
        let currentElement = nums[i]
        if (!elementsQty[currentElement]) {
            elementsQty[currentElement] = { qty: 1}
        }
        else {
            elementsQty[currentElement].qty++
            if(elementsQty[currentElement].qty > majorityElem.qty){
                majorityElem.elem = currentElement
                majorityElem.qty = elementsQty[currentElement].qty
            }
        }
    }
    return majorityElem.elem
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) // 2