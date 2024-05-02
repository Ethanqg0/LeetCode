/*
    Concept: Greedy Approach
        - The global condition is getting all greater elements
        - The local condition is finding the 
    
    Data Structures: Stack & Map
        We utilize the map to create O(1) average search times
        We utilize the stack to keep track of elements in the array and push them to the map

    Pseudocode
    
        for num in nums2
            while num is greater than stack values
                pop value
                set the poppped value to the map

            push num to stack

        for num in nums
            nums1[num] = map.get( nums1[i] ) // here we utilize our map to create O(1) searching
*/
class Stack<T> {
  private stack: T[];

  constructor() {
    this.stack = [];
  }

  public size() {
    return this.stack.length;
  }

  public isEmpty() {
    return this.size() === 0;
  }

  public push(ele: T) {
    this.stack.push(ele);
  }

  public pop() {
    return this.stack.pop();
  }

  public top() {
    return this.stack[this.size() - 1];
  }
}

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  // Use stack to store numbers in non-decreasing number
  // Pop all numbers when a number greater than them is found
  // Use a map to simultaneously set the current number as
  // the next greater number for the popped numbers

  const stack = new Stack<number>();
  const map: Map<number, number> = new Map();

  // Use stack to fill the map with {number: nextGreaterNumber}
  for (let num of nums2) {
    while (!stack.isEmpty() && stack.top() < num) {
      map.set(stack.pop(), num);
    }

    stack.push(num);
  }

  // Set next greater numbers for given numbers using map
  // Set -1 if not present
  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = map.get(nums1[i]) || -1;
  }

  return nums1;
}
