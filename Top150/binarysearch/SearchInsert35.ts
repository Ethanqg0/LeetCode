/*
    Requirements:
        Must utilize a O(log n) algorithm
        The array provided is already sorted
        If the target is found, return the index of the target

    Solution:
        Binary search algorithm

    Pseudocode:
        Initialize low and high pointers
        While low is less than high
            Find the middle index
            If the middle index is the target, return the index
            If the middle index is less than the target, increment low
            If the middle index is greater than the target, decrement high

    Note:
        Binary search is more efficient than linear search because its time complexity is O(log n) compared to linear search's O(n)
        However, if the array is not sorted, linear search is more efficient than sorting the array then using binary search. The time complexity of sorting the array is O(n log n) and the time complexity of binary search is O(log n), which is greater than O(n). Therefore, linear search is more efficient in this case.
*/

function searchInsert(nums: number[], target: number): number {
  let low: number = 0;
  let high: number = nums.length - 1;

  while (low < high) {
    let middle = Math.floor((low + high) / 2);

    if (nums[middle] == target) {
      return middle;
    } else if (nums[middle] < target) {
      low = middle + 1;
    } else if (nums[middle] > target) {
      high = middle - 1;
    }
  }

  return low;
}




