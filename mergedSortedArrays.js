function merge(nums1, m, nums2, n) {
    let p1 = m - 1, // Pointer for nums1
        p2 = n - 1, // Pointer for nums2
        p = m + n - 1; // Pointer for merged array
  
    while (p2 >= 0) { // p2>=0 because all nums2 need to be processed 
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
  }
const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const  n = 3
console.log(merge(nums1,m,nums2,n))

//Output: [1,2,2,3,5,6]