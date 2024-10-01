/*
    Time Complexity: O(4^n)
    Goal: Find minimum siz eof elements to find target
    Strategy: Recursively generate all possibilities with a DFS-search
    * Manage answers in a global data structure outside of the backtrack() function
*/

function letterCombinations(digits: string): string[] {
  // Edge case: if input is an empty string, return an empty array
  if (digits.length === 0) return [];

  let results: string[] = [];

  // Mapping digits to corresponding characters (like on a phone keypad)
  const digitsToChar: { [key: string]: string[] } = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  function backtrack(index: number, currentString: string) {
    // Reached goal, length of letters math length of numbers
    if (currentString.length === digits.length) {
      results.push(currentString);
      return;
    }

    // Get the characters corresponding to the current digit
    let currentDigit = digits[index];
    let possibleLetters = digitsToChar[currentDigit];

    for (let i = 0; i < possibleLetters.length; i++) {
      backtrack(index + 1, currentString + possibleLetters[i]); // Add the character to the current string and move to the next digit
    }
  }

  backtrack(0, "");

  return results;
}
