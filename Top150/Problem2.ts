/*
    Problem 2: #27 Remove Element
    Link: https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
*/

// Solution:
function removeElement(nums: number[], val: number): any {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
}

/*
    Runtime
    56
    ms
    Beats
    67.93%
    of users with TypeScript

    Memory
    51.11
    MB
    Beats
    85.20%
    of users with TypeScript
*/