// Time complexity: O(n)
// Solution: One iteration. Store the values in the map for O(1) searching
// Naive solution: bruteforcing loops. Optimized solution: map

function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>(); // key: number, value: index

  for (let i: number = 0; i < nums.length; i++) {
    let complement: number = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}
