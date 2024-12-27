/*
    Pseudocode
        Utilize a two pointer approach. One at the end, one at the beginning. If they do not equal each other, return false, else, move the pointers closer to the middle. If they are at the middle, return true.
*/

function removeNonAlphanumeric(str) {
  // utilize regex to remove non-alphanumeric characters
  return str.replace(/[^a-zA-Z0-9]/g, "");
}

function isPalindrome(s: string): boolean {
  s = removeNonAlphanumeric(s).toLowerCase();

  let i: number = 0;
  let j: number = s.length - 1;

  while (i < j) {
    let letterOne: string = s[i];
    let letterTwo: string = s[j];

    if (letterOne === letterTwo) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
}