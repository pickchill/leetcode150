/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = 0;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (i === 0) {
      minPrice = prices[i];
    } else if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};

/**
 * 动态规划
 * 1. 确定 dp[i] 表示什么
 * 2. 根据 dp[i], dp[i - 1] 的关系，得出状态转移方程
 * 3. 确定初始条件，如 dp[0] = 0
 */
const maxProfitV2 = (prices) => {
  // dp[i] 前 i 天最大收益
  // dp[i] = max(dp[i - 1], price[i] - minPrice)
  const dp = new Array(prices.length).fill(0);
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(prices[i], minPrice);
    dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
  }
  return dp[prices.length - 1];
};

console.log("res:", maxProfit((prices = [7, 1, 5, 3, 6, 4])));
console.log("res:", maxProfit((prices = [2, 1, 4])));
console.log("res:", maxProfit((prices = [2, 1, 5, 6])));
