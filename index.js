/**
 * Converts temperature from celsius to fahrenheit
 * @param {Number} celsius - temperature in celsius
 * @return {Number} - temperature in fahrenheit
 */
function convertToF(celsius) {
  return celsius * 9 / 5 + 32;
}

/**
 * Reverses a string
 * @param {String} str - input string
 * @return {String} - reversed string
 */
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join(""); //arrays has .reverse() method
}

/**
 * Calculates the factorial using recursion
 * @param {Number} num - input number
 * @return {Number} -factorial
 */
function factorializeRecursive(num) {
  if (num == 0) {
    return 1;
  }
  return num * factorializeRecursive(num - 1);
}

//with the loop
function factorialize(num) {
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}

/**
 * Finds the longest word in a string
 * @param {String} str - input string
 * @return {Number} - length of the longest word in a string
 */
function findLongestWordLength(str) {
  const arrOfWords = str.split(" ");
  let longest = arrOfWords[0];
  for (let i = 1, len = arrOfWords.length; i < len; i++) {
    if (arrOfWords[i].length > longest.length) {
      longest = arrOfWords[i];
    }
  }
  return longest.length;
}

/**
 * Returns an array consisting of the largest number from each provided sub-array
 * @param {Array} arr - multidimensional array
 * @return {Array} - arrOfLargest - array consisting of largest number in each subarray of an input's array
 */
function largestOfFour(arr) {
  const arrOfLargest = [];
  arr.forEach(el => arrOfLargest.push(Math.max(...el)));
  return arrOfLargest;
}

/**
 * Checks if string ends with certain substring
 * @param {String} str - string to check
 * @param {String} target - ending
 * @return {Boolean} - true if string ends with an target, false otherwise
 */
function confirmEnding(str, target) {
  const len = target.length;
  return str.slice(-len) === target;
}


convertToF(30);
reverseString("hello");
factorializeRecursive(10);
factorialize(5);
findLongestWordLength("The quick brown fox jumped over the lazy dog");
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
confirmEnding("Bastian", "n");