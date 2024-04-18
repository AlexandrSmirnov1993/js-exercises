// "In a "lucky" ticket, the sum of the first half of the digits is equal to the sum of the second half of the digits. The ticket numbers can be of any length, with the only condition being that the number of digits is always even, for example: 33 or 2341 and so on."

//Examples

// isHappyTicket('385916'); // true
// isHappyTicket('231002'); // false
// isHappyTicket('1222');   // false
// isHappyTicket('054702'); // true
// isHappyTicket('00');     // true

function isHappyTicket(num) {
  let digits = num.split("");
  let firstHalf = 0;
  let secondHalf = 0;

  for (let i = 0; i < digits.length / 2; i++) {
    firstHalf += parseInt(digits[i]);
  }

  for (let i = digits.length - 1; i >= digits.length / 2; i--) {
    secondHalf += parseInt(digits[i]);
  }

  return firstHalf === secondHalf;
}

console.log(isHappyTicket("385916")); // true
console.log(isHappyTicket("231002")); // false
console.log(isHappyTicket("1222")); // false
console.log(isHappyTicket("054702")); // true
console.log(isHappyTicket("00")); // true
