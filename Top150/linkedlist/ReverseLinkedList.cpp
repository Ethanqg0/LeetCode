/*
    Problem: Reverse a list x amount of times
    
    void reverse(int): Given a non-negative int argument (say, val), 
    this function reverses the order of the first val elements of the list, 
    and leaves the others unchanged.
    Suppose our list is 10 20 30 40. 
    The function reverse(2) would lead to 20 10 30 40, 
    while the function reverse(3) leads to 30 20 10 40. 
    If the argument is more than the length of the list, 
    we reverse the entire list.
*/

/*
    Psuedocode:

    The key to reversing our linked list will be to store, reverse, then shift the elements
    Since we can only reverse up to a certain pointer, we need to reconnect the reversed elements with the rest of the list
    We are going to break off the list, therefore we need to store it as "section_end"
    
    Edge Case: 
        Head is empty: return NULL
        Val is less than or equal to zero

    Previous Node = null
    Current Node = head
    Next Node = null
    Section End Node = head

    iterate to the end of val to get the point where the reversed section and the rest of the list break

    for loop: less than val and curr != NULL
        next = curr->next // store element
        curr->next = prev // reverses
        prev = curr // shift element
        curr = next // shift element

    head->next = section_end (links the sections back together)

    head = prev; sets the beginning of the linked list to the end of your reversed list
*/
void LinkedList :: reverse(int val)
{
    if ( head == NULL || val <= 0 ) { 
        return;
    }

    Node* prev = NULL;
    Node* curr = head;
    Node* next = NULL;
    Node* section_end = head;

    for (int i = 0; i < val && section_end; i++) {
        section_end = section_end->next;
    }

    for (int i = 0; i < val && curr; i++) { // fixed number of iterations, therefore we use for loop over while loop
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }

    if (head) {
        head->next = section_end;
    }

    head = prev;
}