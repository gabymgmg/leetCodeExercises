/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    if (!mat || mat.length === 0 || mat[0].length === 0)
        return [];
    // initialize a queue to keep the pos of the 0
    // m=row length, n = col length
    let m = mat.length, n = mat[0].length;
    let queue = [];
    let MAX_VALUE = m * n;
    let directions = [[1, 0], [-1, 0], [0, -1], [0, 1]]

    // traverse the matrix and update the values that are equal to 1, to maxValue
    // push the pos where value is equal to 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) queue.push([i, j])
            else mat[i][j] = MAX_VALUE
        }
    }

    while (queue.length > 0) {
        let [rowOfQueue, colOfQueue] = queue.shift()
        for (let [r, c] of directions) {
            let newR = r + rowOfQueue, newC = c + colOfQueue
            // this condition ensures that newR and newC are within the boundaries of the mat
            // it also ensures he neighbor's current distance is greater than the distance of the current cell plus 1
            if (newR >= 0 && newR < m && newC >= 0 && newC < n && mat[newR][newC] > mat[rowOfQueue][colOfQueue] + 1) {
                queue.push([newR,newC])
                mat[newR][newC] = mat[rowOfQueue][colOfQueue] + 1
            }
        }
    }
    return mat

};