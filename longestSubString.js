/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    for (let right = 0; right < s.length; i++) {
        // while the char exists, delete what is at its left
        while (set.has(s[right])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[right]);
        maxSize = Math.max(maxSize, right - left + 1) // this is like the len range
    }
    return maxSize;
}


console.log(lengthOfLongestSubstring("dvdf"))//3
console.log(lengthOfLongestSubstring("abcabcbb"))//3 
console.log(lengthOfLongestSubstring("bbbbb"))//1
console.log(lengthOfLongestSubstring("pwwkew"))//3 