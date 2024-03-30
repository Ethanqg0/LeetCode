/*
    Problem Four: #80 Remove Duplicates from Sorted Array II
    Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150

    Solution: Two-Pointer
    Runtime: 59 ms, beats 85%
    Memory: 52.38 mb, beats 75%
*/

function removeDuplicatesII(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let duplicates: number = 0;
  let index: number = 0;
  for (let i: number = 1; i < nums.length + 1; i++) {
    if (nums[index] !== nums[i + 1]) {
      index++;
      nums[index + 1] = nums[i + 1];
      duplicates++;
    }
  }

  return duplicates;
}
