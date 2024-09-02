/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // approach: iterate from the second-last to first elem, if it reaches the first position, means it can jump.
    let goal = nums.length-1 // last elem
    for(let i=nums.length-2;i>=0;i--){
        if(nums[i]+i>=goal){ // nums[i] + i calculates the maximum index that can be
            goal=i           // reached from the current index i by jumping a maximum of nums[i] steps.
        }                    // Ex of first iteration: 1(num off jumps)+3(currindex)>=goal(maxReacheableIndex)
    }
    if(goal === 0) return true
    else return false
};
console.log(jump([2, 3, 1, 1, 4])) 