/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let countingMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!countingMap.has(nums[i])) {
            countingMap.set(nums[i], true)
        }
        else if (countingMap.get(nums[i]) === true) countingMap.delete(nums[i])
    }
    if (countingMap.size) return countingMap.keys().next().value

};
console.log(singleNumber([4, 1, 2, 1, 2])) // 4