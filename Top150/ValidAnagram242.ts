/*
    Anagram: A word formed by rearranging the letters of a different word or phrase

    We can utilize a hashmap to store all the letters of a word. We choose to utilize a map because it has constant look up time. An alternative, such as an array, would require O(n) lookup time in the worst case scenario. This makes the map a more suitable, efficient choice.

    Pseudocode
    hashMap = new Map()

    for letter in s:
        if letter in hashmap
            increase value by 1
        else
            store letter in hashmap, set value to 1

    for letter in t:
        check if letter exists in hashmap - constant lookup time
        if it does
            decrement iterations
        else
            return false

    return true
*/
function isAnagram(s: string, t: string): boolean {
  if (t.length !== s.length) {
    return false;
  } // anagram not possible

  let map: Map<string, number> = new Map();

  for (const letter of s) {
    if (map.has(letter)) {
      // key (letter) exists
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  }

  for (const letter of t) {
    if (map.has(letter) && map.get(letter) > 0) {
      map.set(letter, map.get(letter) - 1);
    } else {
      return false;
    }
  }

  return true;
}
