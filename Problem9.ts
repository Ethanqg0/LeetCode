/*
    Recursive Solution
    Time Complexity: O(n^n), exponential

function canJump(nums: number[]): boolean {
    return canJumpFromPosition(0, nums);
}

function canJumpFromPosition(position: number, nums: number[]): boolean {
    // Goal is met
    if ( position == nums.length - 1) {
        return true;
    }
    
    // Iteration through all jumps at this current position
    const farthestIndex = Math.min(position + nums[position], nums.length - 1);
    for ( let i: number = position + 1; i <= farthestIndex; i++ ) {
        let jump = canJumpFromPosition(i, nums);
        if (jump == true) {
            return true;
        }
    }
    return false;
}
*/

/*
    Greedy Appraoch
*/
function canJump(nums: number[]): boolean {
  let reach: number = 0;
  for (let i: number = 0; i < nums.length && i <= reach; i++) {
    reach = Math.max(reach, i + nums[i]);
  }
  return reach >= nums.length - 1;
}
