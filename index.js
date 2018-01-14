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

/**
 * Repeat a given string str for num times. Return an empty string if num is not a positive number.
 * @param {String} str - string to repeat
 * @param {Number} num - times to repeat
 * @return {String} repeated - string repeated num times or empty string if num <= 0
 */
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }
  let repeated = str;
  for (let i = 1; i < num; i++) {
    repeated += str;
  }
  return repeated;
}

/**
 * Looks through an array and returns the first element in the array for which the function returns true
 * @param {Array} arr - array of elements
 * @param {Function} func - callback to invoke on each el of an array
 * @return first el of the array for which function returns true
 */
function findElement(arr, func) {
  return arr.find(el => func(el));
}

/**
 * Checks if a value is classified as a boolean primitive
 * @param {*} bool - value to test
 * @return {boolean} - true or false
 */
function booWho(bool) {
  return typeof bool === "boolean";
}

/**
 * Capitalize each word in the provided string, turn other characters lowercase.
 * @param {String} str - provided string
 * @returns {String} - capitalized string
 */
function titleCase(str) {
  const arrOfStrings = str.split(" "); //turn to array
  return arrOfStrings
    .map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
    .join(" "); //back to string
}

/**
 * Remove all falsy values from an array
 * @param {Array} arr - array to filter
 * @return {Array} array with only truthy values
 */
function bouncer(arr) {
  return arr.filter(el => el);
}

/**
 * Find the lowest index at which a value should be inserted into an array once it has been sorted
 * @param {Array} arr - array in which to insert
 * @param {Number} num - elelemnt to insert
 * @return {Number} index on which to insert given number
 */
function getIndexToIns(arr, num) {
  if (arr.length === 0) {
    return 0;
  }
  const sortedArr = arr.sort((a, b) => a - b);
  const index = sortedArr.findIndex(el => el >= num);
  return index === -1 ? sortedArr.length : index;
}

/**
 * Checks if the string in the first element of the array contains all of the letters of the string in the second element of the array
 * @param {*} arr - arr with two words
 * @returns {Boolean} - true if the first word contains all the letters from the second, false otherwise
 */
function mutation(arr) {
  const target = arr[1].toLowerCase();
  const source = arr[0].toLowerCase();
  for (let i = 0; i < target.length; i++) {
    if (source.indexOf(target[i]) === -1) {
      return false;
    }
  }
  return true;
}

convertToF(30);
reverseString("hello");
factorializeRecursive(10);
factorialize(5);
findLongestWordLength("The quick brown fox jumped over the lazy dog");
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
confirmEnding("Bastian", "n");
repeatStringNumTimes("abc", 5);
findElement([1, 2, 3, 4], function(num) {
  return num % 2 === 0;
});
booWho(null);
titleCase("I'm a little tea pot");
bouncer([7, "ate", "", false, 9]);
getIndexToIns([2, 5, 10], 15);
mutation(["hello", "Hello"]);
