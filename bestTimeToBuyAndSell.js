var maxProfit = function (prices) {
    if(prices.length<1) return 0 // check for empty arr
    let lowestPrice = prices[0]
    let maxProfit = 0
    for(let i=1;i<prices.length;i++){
        if(prices[i]<lowestPrice){
            lowestPrice = prices[i]
        } else if ( maxProfit < prices[i]-lowestPrice ){
           maxProfit = prices[i]-lowestPrice
        }
    }
    return maxProfit

}
console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
// console.log(maxProfit([7,6,4,3,1])) // 0
// console.log(maxProfit([[2,4,1]])) // 0