/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums[0] === target) { // will work for arr where len is 0 and others
        return 0
    }
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
        let middle = Math.floor((low+high)/2)
        if(target === nums[middle]) return middle
        if(target<nums[middle]){
            high = middle-1
        } else {
            low = middle+1
        }
    }
    return -1
};