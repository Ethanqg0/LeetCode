/*
    Given two arrays of numbers, find the median of both of the arrays.
    Not allowed to merge the arrays and/or sort them.

    Solution:
    Edge case: if the array is empty, return 0
    Find the length of both the arryays, the iterations is length / 2

    Add a pointer to the beginning of each array
    Compare the two pointers, if the first array's pointer is less than the second array's pointer, increment the first array's pointer, else, increment the second array's pointer

    while loop until iterations is 0

    Pseudocode

    iterations = ( array1.length + array2.length ) / 2

    while iterations is not 0
        if array1[pointer1] < array2[pointer2]
            pointer1++
        else
            pointer2++

        iterations--
*/

function getMedian(array1: number[], array2: number[]): number {
  let iterations: number = (array1.length + array2.length) / 2;
  let pointer1: number = 0;
  let pointer2: number = 0;
  while (iterations !== 0) {
    if (array1[pointer1] <= array2[pointer2]) {
      pointer1++;
    }
    if (array2[pointer2] <= array1[pointer1]) {
      pointer2++;
    }
    iterations--;
  }
  if ((array1.length + array2.length) % 2 === 0) {
    return (array1[pointer1 - 1] + array2[pointer2 - 1]) / 2;
  } else {
    return Math.min(array1[pointer1 - 1], array2[pointer2 - 1]);
  }
}

// Test Cases

let array1: number[] = [0, 1, 5];
let array2: number[] = [2, 4, 6, 7];

console.log( getMedian( array1, array2 ) ); // 2