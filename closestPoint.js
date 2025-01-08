/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    // 1. Calculate the squared distance of each point from the origin
    // The distance between two points calculates by: √(x1 - x2)2 + (y1 - y2)2), since the second point is [0,0]
    // It can be reduced to --> x1^2+y12
    const getDistance = (point) => {
        let [x, y] = point
        return x * x + y * y
    }
    let distances = []
    for (let i = 0; i < points.length; i++) {
        distances.push({
            dist: getDistance(points[i]),
            point: points[i]
        })
    }
    distances.sort((a, b) => a.dist - b.dist)
    return distances.slice(0,k).map((dist)=>dist.point)
};

console.log(kClosest([[3,3],[5,-1],[-2,4]],2))