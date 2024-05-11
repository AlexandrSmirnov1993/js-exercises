// Implement a function that reverses the digits in a given number and returns a new number.

// Examples:

// reverseInt(13); // 31
// reverseInt(-123); // -321
// reverseInt(8900); // 98

function reverseNumber(num) {
  const reversed = parseInt(
    Math.abs(num).toString().split("").reverse().join("")
  );
  return num < 0 ? -reversed : reversed;
}

console.log(reverseNumber(13));
console.log(reverseNumber(-123));
console.log(reverseNumber(8900));
