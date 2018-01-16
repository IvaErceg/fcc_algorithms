/**
 * Calculates the sum of numbers passed in an array plus the sum of all the numbers between them.
 * @param {Array} arr 
 * @return {Number} - sum of whole range between 2 numbers in array
 */
function sumAll(arr) {
    const min = Math.min(...arr);
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

  //tests
  sumAll([1, 4]);
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  