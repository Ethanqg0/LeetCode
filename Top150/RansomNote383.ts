/*
    We will utilize a map. The keys will represent the letter, and the value will represent the times it appears within magazine.

    Psuedocode
    if ransomNote length is 0, return true

    if ransomNote length is longer than magazine length, return false

    map

    for letter in magazine
        set map to char, previous value + 1

    for letter in ransomNote
        if letter count is greater than 0
            decrement letter count
        else
            return false
*/
function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length === 0) {
    return true;
  }

  if (ransomNote.length > magazine.length) {
    return false;
  }
  const map = new Map();

  for (const char of magazine) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    if (map.get(char) > 0) {
      map.set(char, map.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
}
