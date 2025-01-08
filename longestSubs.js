// Diferent approach : without deleting

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length
    let left = 0
    let maxLength = 0
    let currMax = 0
    let set = new Set()
    let right = 0

    while (left < s.length && currMax <= s.length) {
        while (!set.has(s[right]) && right < s.length) {
            set.add(s[right])
            currMax++
            right++
        }
        set.clear()
        left++
        right = left
        if (currMax > maxLength) {
            maxLength = currMax
        }
        currMax = 0
    }
    return maxLength
}

// console.log(lengthOfLongestSubstring("abcabcbb"))// 3
// console.log(lengthOfLongestSubstring("abcabcbb"))//3 
console.log(lengthOfLongestSubstring("bbbbb"))//1
console.log(lengthOfLongestSubstring("pwwkew"))//3 