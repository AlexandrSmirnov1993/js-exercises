// "Implement a function that changes the case of each letter in a string to its opposite. The function should return the resulting string.";

//Examples

// invertCase('Hello, World!'); // hELLO, wORLD!
// invertCase('I loVe JS');     // i LOvE js

// 1-st variant
// function invertCase(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i];
//     letter === letter.toLowerCase()
//       ? (result += letter.toUpperCase())
//       : (result += letter.toLowerCase());
//   }
//   return result;
// }

// 2-nd variant
function invertCase(str) {
  return str
    .split("")
    .map((letter) =>
      letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase()
    )
    .join("");
}

console.log(invertCase("Hello, World!"));
console.log(invertCase("I loVe JS"));
