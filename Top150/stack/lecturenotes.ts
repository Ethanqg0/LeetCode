/*
    Stack Lecture Notes

    Uses LIFO (Last In First Out) data structure

    You can use an array or a linked list
        If you are implementing a pure stack (where you only access the first item), then you have O(1)
        regardless of whether you use an array or a linked list. However, with arrays, you may have to resize the data structure 
        which is O(n). You can reduce resizing by allocating extra space during initialization.

        Linked lists avoid that problem, but they have extra memory overhead for the pointers 
        and they are also harder to implement.

        They have their pros and cons, but in general, most people use arrays for stacks.
*/

