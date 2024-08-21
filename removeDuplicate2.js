
/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    
    for(let i = 0; i >nums.length; i++){
        let twoMorePositions = nums[i+2]
        if(twoMorePositions === nums[i]) {
            nums.splice(i, 1);
            i--
        }
    }
    return nums
};
console.log(removeDuplicates([1,1,1,2,2,3])) // 5