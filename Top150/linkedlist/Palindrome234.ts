/*
    Pseudocode:

    Edge Case:
        No elements
        One element
    
    Find the middle point using slow and fast pointers
        Slow pointer moves one spot at a time
        Fast pointer moves two spots at a time

    Reverse the second half using a standard reversal algorithm for LL

    Use a while loop to compare the element from each half
        if they do not equal each other
            return false

    return true
*/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function isPalindromeLL(head: ListNode | null): boolean {
  // 1. Find the middle (slow and fast pointer)
  if (head === null || head.next === null) {
    return true;
  }

  let middlePoint: ListNode | null = null;
  let slowPointer: ListNode | null = head;
  let fastPointer: ListNode | null = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  middlePoint = slowPointer;

  // 2. Reverse the second half (traditional reverse method)
  let prev: ListNode | null = null;
  let curr: ListNode | null = middlePoint;
  let next: ListNode | null = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // 3. Comparing the first half to the second half (while loop with if statements)
  while (prev) {
    if (head.val === prev.val) {
      head = head.next;
      prev = prev.next;
    } else {
      return false;
    }
  }

  return true;
}
