/*
    A prefix is the beginning portion of a word. So for prehistoric, the prefix would be pre

    Because our iterations is unknown for constant access time, we utilize a while loop

    Edge cases: string is shorter than other string which creates an out of bounds error, empty string, prefix is the entire string

    Psuedocode
    prefix = ""
    iterator = 0

    while true
        let letter = first letter of first word

        for each word
            if iterator is greater than word length
                return prefix
            if letter in this word does not match letter variable
                return prefix

        add letter to prefix
*/
function longestCommonPrefix(strs: string[]): string {
  let prefix: string = "";
  let iterator: number = 0;

  while (true) {
    let letter: string = strs[0][iterator];

    for (const str of strs) {
      if (iterator > str.length - 1) {
        return prefix;
      }
      if (str[iterator] !== letter) {
        return prefix;
      }
    }

    prefix += letter;
    iterator++;
  }
}