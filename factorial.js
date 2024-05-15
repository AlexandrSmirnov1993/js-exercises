// Implement the factorial(n) function . The factorial is the product of all natural numbers from 1 to a given number.

// 1 × 2 × 3 × 4 × 5 = 120

// Example:
// factorial(5) = 120
// factorial(4) = 24

function factorial(num) {
  if (num === 0 || num === 1) return 1;

  return factorial(num - 1) * num;
}

console.log(factorial(4));
console.log(factorial(5));
