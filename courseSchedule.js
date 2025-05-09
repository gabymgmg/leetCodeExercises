/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    // Create an array for representing the indegrees (num of edges pointing to the node)
    // The value will be the num of indegree and the index will represent the node
    const indegree = new Array(numCourses).fill(0)
    // Create a 2D array for keeping an adjancent list that where indexes will represent
    // The node and the list itself will contain their neighbors
    const adj = [];
    for (let i = 0; i < numCourses; i++) {
        adj.push([]);
    }
    for (let i = 0; i < prerequisites.length; i++) {
        const curse = prerequisites[i][1]
        const prereq = prerequisites[i][0]
        adj[curse].push(prereq)
        indegree[prereq] += 1
    }
    const queue = [] // Fill the queue with all the nodes that have an indegree of 0
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) queue.push(i)
    }
    let visited = 0 // Visit will have to be equal to num of courses at the end
    while (queue.length>0) {
        const node = queue.pop()
        visited += 1
        // Decrement the indegree of the prereq list of the course you visited
        for (const prereq of adj[node]) {
            indegree[prereq] -= 1
            if (indegree[prereq] === 0) {
                queue.push(prereq)
            }
        }
    }
    return numCourses===visited
}

console.log(canFinish(6, [[1, 0], [1, 2], [3, 1], [2, 3], [2, 4], [4, 5], [2, 5]]))