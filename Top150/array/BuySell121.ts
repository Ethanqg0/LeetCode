/* 
    Problem 121: Best Time to Buy and Sell Stock

    This is a sliding window problem because we need to find the maximum difference between two elements.
    This is also two pointer problem because we need to keep track of the minimum element and the maximum difference.

    O(n), one iteration through the entire loop
*/

function maxProfit(prices: number[]): number {
    let buy = 0 // left
    let sell = 1 // right
    let maxProfit = 0

    for ( let i: number = 0; i < prices.length; i++ ) {
        // Profitable?
        if ( prices[buy] < prices[sell] ) {
            let profit = prices[sell] - prices[buy]
            maxProfit = Math.max(maxProfit, profit)
        } else { // Not profitable?
            buy = sell
        }
        
        sell++
    }

    return maxProfit;
};