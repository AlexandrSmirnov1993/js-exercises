// Implement  a function that prints to the terminal the numbers in the range begin to end.

// If a number is divisible by 3, then the word Fizz is displayed instead
// If a number is divisible by 5, then the word Buzz is displayed instead
// If a number is divisible by both 3 and 5, then the word FizzBuzz is displayed instead of the number
// In other cases, the number itself is displayed
// The function takes two parameters (begin and end) that define the start and end of the range (inclusive). For simplicity, we assume that these parameters are integers greater than zero. If the range is empty (in the case when begin > end), then the function simply does not print anything.

function fizzBuzz(start, end) {
  for (let i = start; i < end + 1; i++) {
    const el = i;
    if (el % 3 === 0 && el % 5 === 0) console.log("FizzBuzz");
    else if (el % 3 === 0) console.log("Fizz");
    else if (el % 5 === 0) console.log("Buzz");
    else console.log(el);
  }
}

console.log(fizzBuzz(11, 20));
