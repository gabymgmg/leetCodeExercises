/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k%nums.length // to ensure that is within the length range
    let removedElements = nums.splice(-k)
    nums.unshift(...removedElements)
    return nums
};
console.log(rotate([1,2,3,4,5,6,7],10)) // [5,6,7,1,2,3,4]