var RandomizedSet = function () {
  this.nums = [];
  this.indices = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.indices.has(val)) {
    return false;
  }
  let id = this.nums.length;
  this.nums.push(val);
  this.indices.set(val, id);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.indices.has(val)) {
    return false;
  }
  let id = this.indices.get(val);
  this.nums[id] = this.nums[this.nums.length - 1];
  this.indices.set(this.nums[id], id);
  this.nums.pop();
  this.indices.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.nums[Math.floor(Math.random() * this.nums.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
