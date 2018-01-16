/**
 * Calculates the sum of numbers passed in an array plus the sum of all the numbers between them.
 * @param {Array} arr 
 * @return {Number} - sum of whole range between 2 numbers in array
 */
function sumAll(arr) {
    const min = Math.min(...arr); //spreading array so we can use Math functions
    const max = Math.max(...arr);
    let total = 0;
    for(let i = min; i<= max; i++) {
      total += i;
  }
    return total;
  }
  
  /**
   * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both
   * @param {Array} arr1 
   * @param {Array} arr2 
   * @return {Array} - symmetric difference of the two arrays
   */
  function diffArray(arr1, arr2) {
    return [...arr1.filter(el => !arr2.includes(el)),    
     ...arr2.filter(el => !arr1.includes(el))];
  }

  /**
   * Removes all elements from the initial array that are of the same value as other provided arguments.
   * @param {Array} arr
   * @return {Array} - filtered array with no values same as provided arguments
   */
function destroyer(arr) {
    let filtered = [...arr];
    const args = Array.from(arguments).slice(1); //make args real array
    args.forEach(arg => {
      filtered = filtered.filter(el => el !== arg); 
      });
    return filtered;
  }
  
  //tests
  sumAll([1, 4]);
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  destroyer([1, 2, 3, 1, 2, 3], 3, 2);