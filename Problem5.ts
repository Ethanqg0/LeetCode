/*
    Problem Five: #169 Majority Element
    Link: https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150

    Notes:
    Very easy with two for-loops, using the O(n^2) efficiency
    But we want to use one for loop

    Solution: 
        One iteration, Boyer-Moore voting algorithm.
        Motivation behind solution: Update value based on element, the majority will be the last one standing

    Performance:
    Runtime 48 ms, beats 98%
    Memory 53.88 mb, beats 46%

*/

function majorityElement(nums: number[]): number {
  let candidate: number = 0;
  let count: number = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}
