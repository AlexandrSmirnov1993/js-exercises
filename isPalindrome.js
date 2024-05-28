// Implement the palindrome function. A palindrome is a sequence of letters or whole words that reads the same forwards as it does backwards.

// Examples:

// kayak
// Never odd or even
//He lived as a devil, eh?
//123454321

function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s|[,.!?"]/g, "");
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("Never odd or even"));
console.log(isPalindrome("He lived as a devil, eh?"));
console.log(isPalindrome("123454321"));
