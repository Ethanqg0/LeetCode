/*
    Method: Use a variable to maintain our position within our desired word. If t matches, we shift over, and add it to a new word. This removes the aspect of "removing" a letter, but instead, creating a variable with newly added letters to match both words.

    Question for interviewer: Does a subsequence occur if the desired word is empty?

    Edge Cases:
        Input Validation - Empty strings, excessively long strings

    Psuedocode:
        Input Validation - empty strings

        position = 0; position for the desired word

        for letter in t
            if s at position == t 
                position++

        if s.length === position
            return true

        return false
*/
function isSubsequence(s: string, t: string): boolean {
  // Edge Case: Input Validation
  if (s.length === 0) {
    return true;
  }

  let position = 0; // maintains position within desired word

  for (let i = 0; i < t.length; i++) {
    if (s[position] === t[i]) {
      position++;
    }
  }

  if (position === s.length) {
    return true;
  }

  return false;
}
