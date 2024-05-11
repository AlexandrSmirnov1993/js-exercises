// Implement a function that reverses the digits in a given number and returns a new number.

// Examples:

// reverseInt(13); // 31
// reverseInt(-123); // -321
// reverseInt(8900); // 98

function reverseNumber(num) {
  return num.toString().split("").reverse().join("");
}

console.log(reverseNumber(-123));
