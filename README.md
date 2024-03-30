# LeetCode
LeetCode 150. Two challenges a day. 

## Types of solutions
Two Pointer Solution

## Find Majority, Mode, Unique Elements of Array
Utilize the Boyer-Moore voting algorithm, 

## Rotation Algorithms
Assuming the rotation is labeled as d = 2:

Left rotations:

Reverse the entire array.
Reverse the first d elements.
Reverse the following (array.length - d) elements.
Right rotations:

Reverse the entire array.
Reverse the first (array.length - d) elements.
Reverse the following d elements.
So the corrected algorithms are:

Left rotations:

Reverse entire array
Reverse first d elements
Reverse following (array.length - d) elements
Right rotations:

Reverse entire array
Reverse first (array.length - d) elements
Reverse following d elements