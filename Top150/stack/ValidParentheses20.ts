/*
    Edge Cases: Starts with a closing bracket, string is empty (true)

    Pseudocode
        if string starts with closing bracket, return false

        const openParentheses = []
        
        for-loop to iterate through string s
            if string at index is an open parenthese, push to open parentheses
            if string at index is a closed parentheses
                if it equals openParentheses last element
                    openParentheses pop
                else
                    return false

        if openParentheses is empty
            return true

        return false
*/
function isValid(s: string): boolean {
  if (s.length === 0) return true;

  if (s[0] === "]" || s[0] === ")" || s[0] === "}") {
    return false;
  }

  let openParentheses: string[] = [];
  const matchingBrackets: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "[" || char === "{") {
      openParentheses.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (
        openParentheses.length === 0 ||
        openParentheses[openParentheses.length - 1] !== matchingBrackets[char]
      ) {
        return false;
      }
      openParentheses.pop();
    }
  }

  return openParentheses.length === 0;
}
