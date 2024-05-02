/*
Description
  A set in JS is a built-in data set. They have unique values, duplicate values will be deleted. It utilizes a hash map to store values. The hash map algorithms is what creates its fast look up time.

Pros
  - Uniqueness. They dont allow duplication
  - Fast look up. Average search time of O(1). 

Cons
  - Do not maintain order, no indexing
  - Limited methods compared to other data structures

Methods
    -add()
    -delete()
    -clear()
    -has()
    -forEach() 
*/


let numberSet: Set<number> = new Set(); // sets can handle multiple data types at once

numberSet.add(1);
numberSet.add(2);
numberSet.add(3);
numberSet.add(1); // Adding duplicate values will be ignored

console.log(numberSet); // Output: Set(3) { 1, 2, 3 }

// Check if a value is in the set
console.log(numberSet.has(2)); // Output: true
console.log(numberSet.has(4)); // Output: false

// Remove an element from the set
numberSet.delete(2);
console.log(numberSet); // Output: Set(2) { 1, 3 }
