// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4
function getTarget(nums, target) {
  var left = 0,
    right = nums.length - 1;
  var center = Math.floor((left + right) / 2);
  var num = nums[center];
  while (left < right) {
    if (num === target) {
      return center;
    } else {
      if (num > target) {
        if (num > nums[right]) {
          right = center;
          continue;
        }
        right = center;
      } else {
        if (num < nums[left]) {
          left = center;
          continue;
        }
        left = center;
      }
      center = Math.floor((left + right) / 2);
    }
  }
  return -1;
}
