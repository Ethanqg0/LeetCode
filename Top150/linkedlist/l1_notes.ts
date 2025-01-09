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