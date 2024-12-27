/*
    Sliding Window Solution

    Goal: Find minimum size of elements to find target
    Strategy: Slide the window from start to finish while maintaining the smallest length
    Code Terminalogy: Do one loop iteration for the right side of the window and then use while loops to continue the movement of the left side of the window until the condition is met.

    Keep moving the right side of the window, if the total exceeds the target, then we update the length if its the minimum. Additioanlly, we slide the left side of the window over to the right until the total is less than the target.
*/

function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let total = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    total += nums[right];

    // Shrink the window from the left as long as the total >= target
    while (total >= target) {
      // Update the minimum length
      minLength = Math.min(minLength, right - left + 1);

      // Slide the window from the left side
      total -= nums[left];
      left++;
    }
  }

  // If no valid subarray was found, return 0
  return minLength === Infinity ? 0 : minLength;
}
