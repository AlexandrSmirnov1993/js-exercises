// In number theory, a perfect number is a positive integer that is equal to the sum of its positive proper divisors, that is, divisors excluding the number itself.

//Examples

// For instance, 6 has proper divisors 1, 2 and 3, and 1 + 2 + 3 = 6, so 6 is a perfect number. The next perfect number is 28, since 1 + 2 + 4 + 7 + 14 = 28.

function isPerfectNumber(num) {
  let divisibleNum = 0;
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisibleNum = i;
      sum += divisibleNum;
    }
  }
  return sum === num ? true : false;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(7));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(29));
