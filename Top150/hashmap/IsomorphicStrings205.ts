/*
    Our hashmap needs a bijective mapping. Essentially, as soon as an element in s is attempted to be overriden with a new element, meaning that we would have a domain element hitting two elements which is not allowed, we can immediately return false

    - Ensure that we are not overriding the keys in the map

    Psuedocode:
        Edge case: strings are not the same length, both strings have a length of zero

        map S
        map T

        for i in s.length
            // ensure we are not overriding, which would make this not injective
            if ( s.get(s[i]) && s.get(s[i]) !== t[i] ) return false
            if ( t.get(t[i]) && t.get[t[i]] !== s[i] ) return false

            // set values
            s.set(s[i], t[i])
            t.set(t[i, s[i])

        return true
*/
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  if (s.length === 0 && t.length === 0) {
    return true;
  }

  let mapS: Map<string, string> = new Map();
  let mapT: Map<string, string> = new Map();

  for (let i: number = 0; i < s.length; i++) {
    if (mapS.get(s[i]) && mapS.get(s[i]) !== t[i]) {
      return false;
    }
    if (mapT.get(t[i]) && mapT.get(t[i]) !== s[i]) {
      return false;
    }

    mapS.set(s[i], t[i]);
    mapT.set(t[i], s[i]);
  }

  return true;
}
