/*
Description
  A set in JS is a built-in data set. They have unique values, duplicate values will be deleted. It utilizes a hash map to store values. The hash map algorithms is what creates its fast look up time.

Pros
  - Uniqueness. They dont allow duplication
  - Fast look up. Average search time of O(1).

Cons
  - Do not maintain order, no indexing
  - Limited methods compared to other data structures
*/
var mySet = new Set([1, 2, 3]);
mySet.delete(1);
console.log(mySet);
