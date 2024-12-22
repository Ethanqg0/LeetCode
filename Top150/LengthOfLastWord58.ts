/*
    Input validation: Is the string empty? Does the string have spaces trailing at the end? Multiple spaces, no letters
    Method: Start at the end, dont begin counting until we find the first round, stop when we find the first space.
    Utilize variable and a for loop

    Psuedocode
    variable length = 0

    if s.length === 0
        return 0

    for loop ( i = string.length - 1; i >= 1; i-- )
        if string at i does not equal space
            length += 1
        else
            if length !== 0
                return length

    return length
*/
/*
    Additionally, since the iteration count is unknown, it would be better to use a while loop instead of a for loop. But since this is a simple problem, a for loop is sufficient.
*/
function lengthOfLastWord(s: string): number {
  let length: number = 0;

  s = s.trim();

  for (let i: number = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      length += 1;
    } else {
      return length;
    }
  }

  return length;
}