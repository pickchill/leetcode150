const jump = (nums) => {
  const length = nums.length;
  let steps = 0, // 步数
    start = 0, // 起跳点
    end = 1; // 起跳开始点
  while (end < length) {
    let maxPosition = 0;
    for (let i = start; i < end; i++) {
      maxPosition = Math.max(maxPosition, i + nums[i]);
    }
    start = end;
    end = maxPosition + 1;
    steps++;
  }
  return steps;
};
