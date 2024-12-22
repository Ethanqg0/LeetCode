Linked Lists are often more tricky rather than intuitive problem-solving. 
This would be because they inherently have structural limitations as a data structure, 
such as their lack of random access that arrays would have, 
their sequential nature and inability to move backwards, and more.

Here are some common tricks you need to know:

Problem #143: Reorder Linked List
This is essentially a merging problem. Split the links into two halves,
reverse the second half, then merge it into the first half. 
This also utilizes the "Slow pointer, fast pointer approach"