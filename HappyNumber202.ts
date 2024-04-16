/*
    Two Steps
    1. Find the sum of the squares of its digits and repeat. Very simple 
    2. Detect endless loop. Any answer we get, we can insert it into a map. If it is inside of the map,
        that means we have already done that, meaning its in a loop. In that case, return false.
*/

function sumOfSquaredDigits(n: number): number {
  let sum = 0;

  while (n > 0) {
    const digit = n % 10; // Extract the last digit
    sum += digit * digit; // Square the digit and add to sum
    n = Math.floor(n / 10); // Remove the last digit
  }

  return sum;
}

function isHappy(n: number): boolean {
  let map = new Map<number, number>();
  let sum: number = sumOfSquaredDigits(n);

  while (true) {
    if (sum === 1) {
      return true;
    }

    if (map.has(sum) === false) {
      map.set(sum, 1);
    } else {
      return false;
    }

    sum = sumOfSquaredDigits(sum);
  }
}
