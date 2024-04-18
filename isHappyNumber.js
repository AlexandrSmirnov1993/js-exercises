// Let's call happy numbers those that, as a result of a series of transformations of the form 'sum of the squares of digits', will turn into one. For example, for the number 7, the transformation chain will look like this:

//Examples

// 7   => 7^2 = 49,
// 49  => 4^2 + 9^2 = 16 + 81 = 97,
// 97  => 9^2 + 7^2 = 81 + 49 = 130,
// 130 => 1^2 + 3^2 + 0^2 = 10,
// 10  => 1^2 + 0^2 = 1.

// Conclusion: number 7 - is happy.

//Main function
function isHappyNumber(num) {
  for (let i = 0; i < 10 && num != 1; i++) {
    num = sumOfSquareDigits(num);
  }
  if (num == 1) return true;
  else if (num != 1) return false;
}

// Function helper
function sumOfSquareDigits(num) {
  arrayNum = num.toString().split("");
  let resultArray = 0;
  for (let i = 0; i < arrayNum.length; i++) {
    let element = arrayNum[i];
    resultArray += element ** 2;
  }
  return resultArray;
}

console.log(isHappyNumber(7));
console.log(isHappyNumber(10));
console.log(isHappyNumber(9));
