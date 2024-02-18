/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let h = 0;
  citations.sort((a, b) => b - a);
  // 0 1 3 5 6
  // 6 5 3 1 0
  for (let i = 1; i <= citations.length; i++) {
    if (citations[i - 1] >= i) {
      h = i;
    }
  }
  return h;
};

const hIndexV2 = (citations) => {
  if (citations.length <= 1) {
    return citations[0] >= 1 ? 1 : 0;
  }
  let left = 0,
    right = citations.length - 1;
  while (left < right) {
    const mid = Math.floor(left + right) / 2;
    let count = 0;
    for (let c of citations) {
      if (c >= mid) {
        count++;
      }
    }
    if (count >= mid) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
