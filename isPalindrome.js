// Implement the palindrome function. A palindrome is a sequence of letters or whole words that reads the same forwards as it does backwards.

// Examples:

// kayak
// Never odd or even
//He lived as a devil, eh?

function isPalindrome(str) {
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("Never odd or even"));
console.log(isPalindrome("He lived as a devil, eh?"));
