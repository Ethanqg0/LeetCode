// Time Complexity: O(n)

function maxSubArray(nums: number[]): number {
  let maxSub: number = nums[0];
  let currSum: number = nums[0];

  for (let i: number = 1; i < nums.length; i++) {
    if (currSum < 0) {
      currSum = 0;
    }

    currSum += nums[i];
    if (currSum > maxSub) {
      maxSub = currSum;
    }
  }

  return maxSub;
}
