// Implement the fib() function. The function computes positive Fibonacci numbers. The argument is the ordinal number of the number, numbering in the sequence starts from zero

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, …

// Examples

// fib(3);  // 2
// fib(5);  // 5
// fib(10); // 55

function fib(num) {
  if (num === 1) return 1;
  if (num === 0) return 0;
  else return fib(num - 1) + fib(num - 2);
}

console.log(fib(3));
console.log(fib(5));
console.log(fib(10));
