/*
    Initialize leftPointer = 0
    Initialize rightPointer = height.length - 1
    Initialize maxArea = 0

    While leftPointer < rightPointer:
        a. Calculate the current area as:
        area = min(height[leftPointer], height[rightPointer]) * (rightPointer - leftPointer)
        
        b. Update maxArea if the current area is larger:
        maxArea = max(maxArea, area)

        c. Move the pointer that points to the shorter line:
        - If height[leftPointer] < height[rightPointer], increment leftPointer
        - Else, decrement rightPointer

    Return maxArea
*/
function maxArea(height: number[]): number {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let maxArea = 0;

  while (leftPointer < rightPointer) {
    // Calculate the current area
    const area =
      Math.min(height[leftPointer], height[rightPointer]) *
      (rightPointer - leftPointer);
    // Update the max area
    maxArea = Math.max(maxArea, area);

    // Move the pointer pointing to the shorter line
    if (height[leftPointer] < height[rightPointer]) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return maxArea;
}
