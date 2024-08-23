/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = prices[0]
    let maxProfit = 0
    for(let i=1;i<prices.length;i++){
        if(buy<prices[i]){
            maxProfit += prices[i]-buy
        } 
        buy = prices[i]
    }
    return maxProfit

}
console.log(maxProfit([7,1,5,3,6,4])) // 7