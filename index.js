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

convertToF(30);
reverseString("hello");
factorializeRecursive(10);
factorialize(5);
