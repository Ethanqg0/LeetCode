/*
    We need a bijective mapping between pattern and s. Since bijective requires both sides to have one to one mapping, we will likely have two maps.

    No new meanings, any attempt to overwrite a value should return false

    Pseudocode:
        edge case: if both are empty
        edge case: if one is empty and the other isnt

        mapWords
        mapPhrases

        p array = pattern.split(" ")

        for iterator in s
            ensure no overriding

            set values
            mapWords.set()
            mapPhrases.set()

        return true // means we have a bijective mapping
*/
function wordPattern(pattern: string, s: string): boolean {
  const words: string[] = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  let mapWords: Map<string, string> = new Map();
  let mapLetters: Map<string, string> = new Map();

  for (let i: number = 0; i < words.length; i++) {
    if (mapWords.get(words[i]) && mapWords.get(words[i]) !== pattern[i]) {
      return false;
    }
    if (mapLetters.get(pattern[i]) && mapLetters.get(pattern[i]) !== words[i]) {
      return false;
    }

    mapWords.set(words[i], pattern[i]);
    mapLetters.set(pattern[i], words[i]);
  }

  return true;
}
