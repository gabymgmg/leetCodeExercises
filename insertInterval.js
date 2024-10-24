/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {

    let i = 0
    let start = newInterval[0]
    let end = newInterval[1]
    let result = []
    // insert the intervals where the secnd pos are lower then the start
    while (i < intervals.length && intervals[i][1] < start) {
        result.push(intervals[i])
        i++
    }
    // merge the ones that are overlapping
    while (i < intervals.length && intervals[i][0] <= end) {
        start = Math.min(start,intervals[i][0])
        end = Math.max(end,intervals[i][1])
        i++
    }
    // push the start and end, they will represent the overlap
    result.push([start,end])
    // push the rest
    while (i < intervals.length) {
        result.push(intervals[i])
        i++
    }
    return result

};