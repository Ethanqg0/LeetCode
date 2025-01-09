/*
    Method: Reverse the second half of the linked list, and then go by one and by one, as soon as one does not equal the
    other, we return false

    Edge Case: Odd amount of elements, no elements
        Odd: Ignore the middle element, reverse the rest


    Psuedocode
        Edge Case: if no elements, return true
        Edge Case: if one element, return true

        variable nextNode: Node = head
        variable middle: Node; 

        for (let i = 0; i < Math.ceiling(length / 2); i++) {
            nextNode = nextNode->next
        }

        middle = nextNode

        while (!middle->next) {
            reverse operation
        }

        compare first half to second half
            if first half at index !== second half at index
                return false

        return true
*/
