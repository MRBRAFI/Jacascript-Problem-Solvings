const nums = [1, -2, 1, 0, 5];
const matchedCount = 0;

const threeSumCount = (nums, matchedCount) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === matchedCount) {
          return [i, j, k];
        }
      }
    }
  }
};

console.log(threeSumCount(nums, matchedCount));
