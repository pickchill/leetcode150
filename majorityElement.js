/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

/**
 * 投票法
 */
var majorityElementV2 = (nums) => {
  if (nums.length <= 1) {
    return nums[0];
  }
  let candidate = nums[0];
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
};
