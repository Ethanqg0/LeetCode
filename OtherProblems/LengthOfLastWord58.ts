function lengthOfLastWord(s: string): number {
  // Solution: Start at the end, go backwards, begin counting when we find our first character that is not a space, then stop when we find a space

  // Edge case: word is empty
  if (s.length === 0) {
    return 0;
  }

  let counter: number = 0;

  for (let i: number = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && counter > 0) {
      return counter;
    } else if (s[i] !== " ") {
      counter++;
    }
  }

  return 0;
}
