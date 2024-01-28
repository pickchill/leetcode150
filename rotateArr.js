/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const length = nums.length;
  if (length <= 1) {
    return nums;
  }
  const newArr = new Array(nums);
  for (let i = 0; i < length; i++) {
    newArr[(i + k) % length] = nums[i];
  }
  for (let i = 0; i < length; i++) {
    nums[i] = newArr[i];
  }
  return nums;
};

const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start++], arr[end--]] = [arr[end], arr[start]];
  }
};

const rotateV2 = (nums, k) => {
  const length = nums.length;
  k = k % length;
  reverse(nums, 0, length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, length - 1);
  return nums;
};

console.log("res", rotateV2((nums = [1, 2, 3, 4, 5, 6, 7]), (k = 3)));
