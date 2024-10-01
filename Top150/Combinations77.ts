function combine(n: number, k: number): number[][] {
  let results: number[][] = [];

  if (n === 0 || k === 0) {
    return results;
  }

  function backtrack(start: number, combination: number[]) {
    // If the combination is complete, add it to results
    if (combination.length === k) {
      results.push([...combination]);
      return;
    }

    for (let i = start; i <= n; i++) {
      combination.push(i); // Add the number to the combination
      backtrack(i + 1, combination); // Recur with the next number
      combination.pop(); // Remove the last number to backtrack
    }
  }

  backtrack(1, []);
  return results;
}
