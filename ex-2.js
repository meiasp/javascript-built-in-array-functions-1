let words = ["apple", "cat", "dog", "elephant"];

/* function get5CharWords(words) {
  return words.filter((result) => result.length >= 5)
} */

const get5CharWords = (words) => words.filter((result) => result.length >= 5)

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
