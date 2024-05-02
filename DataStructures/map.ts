/*
Description
  A map in JS is a built-in data set. Maps utilize key-value pairs similar to a dictionary.
  It utilizes a hash map to store values. The hash map algorithms is what creates its fast look up time.

Pros
  - Fast look up. Average search time of O(1). 

Cons

Methods
    -set(i,i), add a key-value pair
*/

let myMap = new Map([ ["name", "John Doe"], ["age", "25"], ["location", "SF"] ]);

console.log(myMap)
myMap.set("name", "Jane Doe"); // Overwrites the value of the key "name"

console.log(myMap)