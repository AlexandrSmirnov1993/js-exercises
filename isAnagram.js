// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.  An anagram does not have to have the same meaning as the original word or phrase.

//Examples
// cat - act
//listen - silent
//triangle - integral
//Statue of Liberty - Built to stay free

function isAnagram(str1, str2) {
  return (
    str1.toLowerCase().split("").sort().join("").trim() ==
    str2.toLowerCase().split("").sort().join("").trim()
  );
}

console.log(isAnagram("cat", "act"));
console.log(isAnagram("triangle", "integral"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("Statue of Liberty", "Built to stay free"));
