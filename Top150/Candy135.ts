// One iteration to create the baseline distribution
// Second iteration to check the values of candies, and see if the candies array is matching it. If not, it is corrected accordingly.
// Time complexity:

function candy(ratings: number[]): number {
  let candies: number[] = [];
  candies.push(1);

  for (let i: number = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies.push(candies[i - 1] + 1);
    } else {
      candies.push(1);
    }
  }

  for (let i: number = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1; // Ensure that candy count is greater than or equal to the right neighbor's count
    }
  }

  const sum = Object.values(candies).reduce((acc, val) => acc + val, 0);
  return sum;
}
