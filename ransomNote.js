/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    // if magazine is shorter than ransom it can't be produced by it
    if (ransomNote.length > magazine.length) return false
    // create the hash table
    let mapMagazine = new Map()
    let j = 0
    for (let i = 0; i < magazine.length; i++) {
        mapMagazine.set(magazine[i], (mapMagazine.get(magazine[i]) || 0) + 1)
    }
    while (j < ransomNote.length) {
        if (!mapMagazine.has(ransomNote[j]) || (mapMagazine.get(ransomNote[j])) <= 0) return false
        mapMagazine.set(ransomNote[j], (mapMagazine.get(ransomNote[j]) - 1))
        j++
    }
    return true
};