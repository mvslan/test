function test(nums, target) {
  var m = 0,
    len = nums.length;
  n = nums[0].length - 1;
  var num = nums[m][n];
  while (m < len && n >= 0) {
    if (num === target) {
      return true;
    } else {
      if (num > target) {
        n--;
        num = nums[m][n];
      } else {
        m++;
        num = nums[m][n];
      }
    }
  }
  return false;
}
