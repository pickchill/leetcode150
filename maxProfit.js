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

// 收集所有收益
const maxProfitV3 = (prices) => {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      maxProfit += prices[i + 1] - prices[i];
    }
  }
  return maxProfit;
};

// 动态规划
// dp[i][j] 表示当前最大收益  i: 当天  j: 持股状态(0不持股，1持股)
// dp[i][0] = Max(dp[i - 1][0], dp[i - 1][1] + prices)
// dp[i][1] = Max(dp[i - 1][1], dp[i - 1][0] - prices)
// dp[0][0] = 0, dp[0][1] = -prices[0]
const maxProfitV4 = (prices) => {
  if (prices.length <= 1) {
    return 0;
  }
  const dp = new Array(prices.length).fill(0).map((_) => new Array(2).fill(0));
  console.log("-------");
  console.log(dp);
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices);
  }
  console.log("dp", dp);
  return dp[prices.length - 1][0];
};

console.log("res", maxProfitV4((prices = [7, 1, 5, 3, 6, 4])));
