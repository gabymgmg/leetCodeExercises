
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1) // if it doesnt exist, set it to 0
    }
    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i]) || map.get(t[i]) === 0) return false
        map.set(t[i], map.get(t[i]) - 1)
    }
    return true
};

console.log(isAnagram("anagram", "nagaram"))