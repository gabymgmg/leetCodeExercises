/**
 * @param {number} n
 * @return {number}
 */
// Fibonacci solution
var climbStairs = function (n) {
    //approach:  tabulation / bottom to top 
    // Initialize an array with a size of max n possible
    let tab = new Array(n + 1)
    tab[1] = 1
    tab[2] = 2
    for (let i = 3; i <= n; i++) {
        tab[i] = tab[i - 1] + tab[i - 2]

    }
    return tab[n]
};

