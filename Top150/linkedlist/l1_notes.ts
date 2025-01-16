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

/*
    Method:
        Find the length of the list
        Link the tail to the head
        Break the rotation at (length - k - 1)
        Maintain the node at (length - k), this will become the new head

    Pseudocode:
        Edge Cases
            Zero or One elements, return NULL

        length = 0
        Node* curr = head

        while (curr) {
            curr = curr->next
            length++
        } // find length while going to the end to link tail to head

        if (length > k) {
            k = k % length
        }

        curr->next = head // link the tail to the head

        curr = head

        for (let i = 0; i < length - k - 1; i++) {
            curr = curr->next
        }

        head = curr->next
        curr->next = NULL
*/
class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        // Edge Cases
        if (head == NULL || head->next == NULL) { return head; }
        if (k == 0) { return head; }

        int length = 1;
        ListNode* curr = head;

        // Reaching End of List
        while (curr->next) {
            curr = curr->next;
            length++;
        }

        k = k % length;

        // Linking the tail to the end (circular linking)
        curr->next = head;

        curr = head;

        // Breaking the loop and setting a new head
        for (int i = 0; i < length - k - 1; i++) {
            curr = curr->next;
        }

        head = curr->next;
        curr->next = NULL;

        return head;
    }
};

/*
    Psuedocode:
        Edge Cases
            If zero or one elements, return head

        Node* prev = NULL
        Node* curr = head

        std::set<int> elementsSet;

        while (curr)
            if elementsSet.find(curr->val) != elementsSet.end()
                prev->next = curr->next
                curr->next = NULL
                curr = prev->next
            else
                elementsSet.insert(curr.val)
                prev = curr
                curr = curr->next
        return head
*/
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if (head == NULL || head->next == NULL) { return head; }

        ListNode* prev = NULL;
        ListNode* curr = head;

        std::unordered_set<int> elementsSet;

        while (curr) {
            if ( elementsSet.find(curr->val) != elementsSet.end() ) {
                prev->next = curr->next;
                curr->next = NULL;
                curr = prev->next;
            } else {
                elementsSet.insert(curr->val);
                prev = curr;
                curr = curr->next;
            }
        }

        return head;
    }
};