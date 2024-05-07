/*
    Time Complexity: O(n^2), average case O(n^2), best case O(n) if the array is already sorted
    Outer loop for passes
    Inner loop for comparisons
*/

function bubbleSort(array: number[]): number[] {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    // If no elements were swapped in this pass, the array is sorted
    if (!swapped) {
      break;
    }
  }

  return array;
}


let array1: number[] = [3,5,1,7,8,2,5,45];

console.log( bubbleSort(array1) );