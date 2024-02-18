/**
 * @param {number[]} nums
 * @return {boolean}
 */
// dp[i]: 当前能跳到的最远距离
// dp[i] = max(dp[i - 1], i + nums[i])
// dp[0] = 0, return dp[len - 1] >= len - 1
var canJump = function (nums) {
  const length = nums.length;
  const dp = new Array(length).fill(0);
  dp[0] = 0;
  for (let i = 1; i < length; i++) {
    if (i > dp[i - 1]) {
      return false;
    }
    dp[i] = Math.max(dp[i - 1], i + nums[i]);
  }
  return dp[length - 1] >= length - 1;
};

// dp[i] 只跟 dp[i - 1] 有关，内存优化
const canJumpV2 = (nums) => {
  const length = nums.length;
  if (length <= 1) {
    return true;
  }
  let farthest = nums[0];
  for (let i = 1; i < length; i++) {
    if (i > farthest) {
      return false;
    }
    farthest = Math.max(farthest, i + nums[i]);
    if (farthest >= length - 1) {
      return true;
    }
  }
  return false;
};
