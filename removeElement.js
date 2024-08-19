function removeElement (nums, val) {
    let k =0
    for(let i=0; i<nums.length;i++){
        if(nums[i]===val){
            nums.splice(i,1)
            k++
            i--
        }
    }
    return nums
};
console.log(removeElement([0,1,2,2,3,0,4,2], 2))