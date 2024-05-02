/**
    Problem Six: #189 Rotate Array
    Link: https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150

    Solution:
        Rotation Algorithm
            Right rotation: (left is slightly different)
            Assuming shift is represented by d
            Reverse the entire array
            Reverse the first d elements
            Reverse the following (nums.length - d) elements
            Utilizes swapping

    Performance:
        Runtime 74ms, beats 96%
        Memory 58mb, beats 97%
 */

function rotate(nums: number[], k: number): void {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
