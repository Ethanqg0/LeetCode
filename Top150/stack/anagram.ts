/*
    Using a stack to see if two strings are anagrams is not optimal, maps and sorting strings are better choices. However, this is
    for a school assignment.
*/
function isAnagram(s: string, t: string): boolean {
    let stack = [];

    if (s.length !== t.length) { return false }

    for (let i: number = 0; i < s.length; i++) {
        stack.push(s[i])
    } 

    while (true) {
        let currentLetter = stack.pop();
        let anagram = false;

        for (let i: number = 0; i < t.length; i++) {
            if (t[i] === currentLetter) {
                anagram = true;
                t = t.slice(0, i) + t.slice(i + 1);
                break;
            }
        }

        if (anagram === false) { return false; }
        if (stack.length === 0 && t.length === 0) { return true; }
    }
};