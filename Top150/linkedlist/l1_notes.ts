/*
    Introduction: Linked List
        Dynamic Memory Allocation (Ideal for when we dont know the number of elements in advance)
        Efficient insertion and eletion (Dont need to move data or copy data, for example, arrays have to create a new data structure and copy it over, whereas linked lists simply change the order of the nodes and their pointers)
        Very efficient insertion at the beginning and end (if you keep track of the tail)
        Not good for random access, arrays are better     

    Palindrome: Linked List
        1) Find Middle: Use slow and fast pointers
        2) Reverse Second Half: while loop
        3) Compare First and Second Half: if-statements, while loop
            if they dont match
                return false

        Return True
*/

/*
    We utilize a recursive approach to solve this problem

    Pseudocode:
    if head is null, return null // end of the list
    if start.val is equal to val, return start // this is what we are looking for
    else, recursively call the function with the next node
*/
function findVal(val, start): ListNode | null {
    if (start === null) { return null }
    if (start.val === val) { return start }

    return findVal(val, start.next)
}

/*  Recursion is notorious for calling stack overflow because of the large amount of
    execution calls it can place on the stack, iterative calls tend to be safer
*/