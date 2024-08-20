/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k =0
    for(let i=0; i<nums.length;i++){
        let val = nums[i+1]
        if(nums[i]===val){
            nums.splice(i,1)
            k++
            i--
        }
        if(nums[i+1]!==val) val=nums[i+1]
    }
};

// IMPROVED ONE
var removeDuplicates = function(nums) {
    let k =1 // will hold the index of the different element
    for(let i=1; i<nums.length;i++){ 
        if(nums[i]!==nums[i-1]){
            nums[k] = nums[i]
            k++
        }
    }
    return k
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // 5