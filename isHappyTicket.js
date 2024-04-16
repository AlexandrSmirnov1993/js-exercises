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
