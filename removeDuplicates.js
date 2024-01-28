/**
 * 基础版  删除非严格递增数组中的重复元素
 */
// const isExist = (bucket, val) => {
//   return bucket.includes(val);
// };
// var removeDuplicates = (nums) => {
//   const bucket = new Array(nums.length).fill(undefined);
//   let index = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (!isExist(bucket, nums[i])) {
//       bucket[index++] = nums[i];
//     }
//   }
//   for (let i = 0; i < bucket.length; i++) {
//     nums[i] = bucket[i];
//   }
//   return index;
// };

// console.log(removeDuplicates((nums = [1, 1, 2])));

var removeDuplicatesCommon = (nums) => {
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[index] !== nums[i]) {
      nums[++index] = nums[i];
    }
  }
  return index + 1;
};
// console.log(removeDuplicates((nums = [1, 1, 2])));

/**
 * 进阶 重复元素不超过2次
 */
var removeDuplicates = (nums) => {
  if (nums.length <= 2) {
    return nums.length;
  }
  let index = 0;
  let times = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[index] === nums[i]) {
      times++;
      if (times <= 2) {
        nums[++index] = nums[i];
      }
    } else {
      times = 1;
      nums[++index] = nums[i];
    }
  }
  return index + 1;
};

var removeDuplicatesV2 = (nums) => {
  if (nums.length < 2) {
    return nums;
  }
  let slow = 2,
    fast = 2;
  while (fast < nums.length) {
    if (nums[slow - 2] !== nums[fast]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};

console.log(removeDuplicates((nums = [1, 1, 1, 1, 2, 2, 3])));
console.log(removeDuplicates((nums = [0, 0, 1, 1, 1, 1, 2, 3, 3])));
