/**
 * Converts temperature from celsius to fahrenheit
 * @param {Number} celsius - temperature in celsius
 * @return {Number} - temperature in fahrenheit
 */

function convertToF(celsius) {
    return celsius * 9/5 + 32;
  }
  
  convertToF(30);

/**
 * Reverses a string
 * @param {String} str - input string
 * @return {String} - reversed string
 */
  function reverseString(str) {
    return str.split("").reverse().join("");  //arrays has .reverse() method
  }
  
  reverseString("hello");