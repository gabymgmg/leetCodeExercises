/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let jumps = 0
    let generalMax = 0 // the farthest index in general
    let currentMax = 0 // just the max of the current element
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + i > currentMax) currentMax = nums[i] + i
        if (i === generalMax) {
            jumps++
            generalMax = currentMax
        }
    }
};

console.log(jump([2, 3, 1, 1, 4])) //2