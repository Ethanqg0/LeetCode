/*
    Problem 3: #26 Remove Duplicates from Sorted Array
    Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

    Notes:
        Splice = entire iteration with shifting. Inefficient. Dont use it unless you can justify its use.
        Instead, we should aim to remove the duplicates with only one iteration through the entire loop.

        We use two pointers. If they equal the same, we move a pointer to the next element. If they are 
        different, then we replace the duplicate value. If they are still the same, we shift the pointer again 
        and repeat the process.

        This solution is efficient because it only has one iteration through the entire array.

        Time Complexity: O(n)
        Solution Type: Two-pointer
        Runtime: 57 ms, beats 94%
        Memory: 52.88 mb, beats 67.93%
*/

const removeDuplicates = (nums: number[]): number => {
  if (nums.length === 0) return 0;

  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[index]) {
      index++;
      nums[index] = nums[i];
    }
  }

  return index + 1;
};
