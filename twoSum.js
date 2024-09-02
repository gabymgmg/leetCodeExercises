/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = new Map()
    for(let i=0;i<nums.length;i++){
        let temp = target-nums[i]
        if(hashMap.has(temp)) return [i,hashMap.get(temp)]
        hashMap.set(nums[i],i)
    }
    
}; 
console.log(twoSum([2,1,3,7,11,15],9))