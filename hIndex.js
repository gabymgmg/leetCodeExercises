
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let arrLen = citations.length
    // sort the array in ascending order, with this you will secure that the bigger 
    // elem will be on the right side of the arr
    citations.sort((a,b)=>a-b) // [0,1,3,5,6] --> ascending because in this way you'll avoid unnecessary iterations
    for(let i=0; i<arrLen;i++){
        if(citations[i]>=(arrLen-i)) return arrLen-i //  it will stop in the 3rd iteration since 3>=5-2. 
        // the returning result will be valid since the elem before that index have a lower or equal value(i)
    }
    return 0
};
console.log(hIndex([3, 0, 6, 1, 5])) // 3
