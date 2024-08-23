Greedy Choice Property: 

A problem is said to demonstrate the greedy choice property if we can prove the first choice in the approach could be part of an optimal solution.

Let S be an optimal solution to said problem. Let a1 be an activity that ends first via greedy choice. If S contains a1, the problem exhibits the greedy choice property. 

In max subarray, we can trust that our locally optimal steps lead to the global solution because our local choice states:
    if adding this makes our subarray negative, then we create a new subarray

We can prove this to be effective because if our current sum falls below zero, that means that adding the current element worsened the solution. It also means that adding elemetns following that will be better off without the previous elements because their total sum will always be negative. 

Characteristics:
- Greedy solutions are often used for optimization where you are trying to maximize or minimize something

