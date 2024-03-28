/*
  Problem One: #88 Merge Sorted Array
  Link: https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
*/

// Solution:
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  /* 
        Notes To Self
        1. Utilize while-loop: M and N are unknown lengths, thus it would be optimal to use
        a while-loop over a for-loop because we can handle left over values

        2. Begin at end of while-loop: Since the additional space in nums1 is allocated at the end,
        replacing values from the end avoids the need for shifting elements and ensures efficient merging.
    */

  // indexing
  let i: number = m - 1; // nums1
  let j: number = n - 1; // nums2
  let k: number = n + m - 1; // nums1 + nums 2

  while (i >= 0 && j >= 0) {
    if (nums1[i] <= nums2[j]) {
      nums1[k] = nums2[j];
      k--;
      j--;
    } else {
      nums1[k] = nums1[i];
      k--;
      i--;
    }
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }

  while (i >= 0) {
    nums1[k] = nums1[i];
    k--;
    i--;
  }
}

/*
  Runtime
  63
  ms
  Beats
  31.60%
  of users with TypeScript

  Memory
  51.20
  MB
  Beats
  89.72%
  of users with TypeScript
*/