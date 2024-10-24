/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let containDuplicate = false
    let i = 0
    const map = new Map()

    while(!containDuplicate && i<nums.length){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        if(map.get(nums[i])>1) containDuplicate = true
        i++
    }
    return containDuplicate
};

console.log(containsDuplicate([1,2,3,4]))