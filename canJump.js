/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let goal = nums.length-1 // last elem
    for(let i=nums.length-2;i>=0;i--){
        if(nums[i]+i>=goal){
            goal=i
        }
    }
    if(goal === 0) return true
    else return false
};