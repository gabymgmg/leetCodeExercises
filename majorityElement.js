/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let elementsQty = {}
    let majorityElem = { elem: nums[0], qty: 1 }
    for (let i = 0; i < nums.length; i++) {
        let currentElement = nums[i]
        if (!elementsQty[currentElement]) {
            elementsQty[currentElement] = { qty: 1 }
        }
        else {
            elementsQty[currentElement].qty++
            if (elementsQty[currentElement].qty > majorityElem.qty) {
                majorityElem.elem = currentElement
                majorityElem.qty = elementsQty[currentElement].qty
            }
        }
    }
    return majorityElem.elem
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])) // 2

//improved - Lesser lines
var majorityElement = function (nums) {
    let map = new Map()
    let maxQty = 0
    let maxNum 
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i])|| 0)+1)
        if(map.get(nums[i])>maxQty){
            maxNum = nums[i]
            maxQty = map.get(nums[i])
        }
    }
    return maxNum
};
console.log(majorityElement([3,3,4])) // 2
