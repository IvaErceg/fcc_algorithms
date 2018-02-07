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
  
/**
 * Looks through an array of objects and returns an array of all objects that have matching name and value pairs.
 *  Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
 * @param {Array} collection - array of objects
 * @param {Object} source - object with properties on which to filter
 * @return {Array} filtered array that includes only objects which properties are the same as in provided obj
 */
function whatIsInAName(collection, source) {
  let filtered = collection;
  for(let prop in source) {
    filtered = filtered
      .filter(el => el[prop] === source[prop]);
  }
  return filtered;
}

  /**
   * Takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
   * If a word begins with a vowel just add "way" to the end.
   * If there are no vowels just add "ay" to the end.
   * @param {String} str - provided string
   * @return {String} string in pig latin
   */
  function translatePigLatin(str) {
    if(str.match(/^[aeiou]/)) {
      return `${str}way`;
    }
     if(!str.match(/[aeiou]+/)) {
      return `${str}ay`;
    }
    const consonants =/^[bcdfghjklmnprstqvwz]+/;
    const strWithPattern = str.match(consonants)[0];
    const len = strWithPattern.length;
    return `${str.slice(len)}${strWithPattern}ay`;
  }
  

/**
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence. 
 * Preserve the case of the first character in the original word when you are replacing it. 
 * @param {String} str - original string
 * @param {String} before - what to replace
 * @param {String} after - what to replace with
 * @return {String} - string in which one word is replaced with another
 */
  function myReplace(str, before, after) {
    isUpper = (str) => str.charAt(0) === str.charAt(0).toUpperCase();
    const replaceWith = isUpper(before) ? after.charAt(0).toUpperCase() + after.slice(1) : after.toLowerCase();
    return str.replace(before, replaceWith);
  }

  /**
   * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
   * @param {String} str
   * @return {Array} - array with pairs of strings as a subarrays
   */
function pairElement(str) {
  let pairs = [];
  const arr = str.split("");
   arr.forEach(el => {
     if(el === "A") {
       pairs.push(["A", "T"]);
     } else if(el === "T") {
       pairs.push(["T", "A"]);
     } 
     else if(el === "C") {
       pairs.push(["C", "G"]);
     } 
     else if(el === "G") {
       pairs.push(["G", "C"]);
     } 
   });
   return pairs;
}

/**
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 * @param {Array} collection 
 * @param {String} pre - property of an object
 * @return{Boolean} - true if property value is truthy on all items in collection, false otherwise
 */
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(el => el[pre]);
}

/**
 * Sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
 * @return{Number or Function} - if both arguments are provided, return their sum, otherwise return function which works as an adder
 */
function addTogether() {
  const a = arguments[0];
  const b = arguments[1];
  if(a && typeof(a) !== "number" || b && typeof(b) !== "number") {
    return undefined;
  }
   if(a && b) {
      return a + b;
}
      return function(x) {
         if(typeof(x) !== "number") {
            return undefined;
          }
         return a + x;
       };  
}

/**
 * implement Person constructor function
 * @param {String} firstAndLast - full name of a person 
 */
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarlyž
  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];
   this.getFirstName = function() {
    return firstName;
  };
   this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };
   this.setFirstName = function(first) {
    firstName = first;
  };
   this.setLastName = function(last) {
    lastName = last;
  };
   this.setFullName = function(firstAndLast) {
     firstName = firstAndLast.split(" ")[0];
     lastName = firstAndLast.split(" ")[1];
     fullName = `${firstName} ${lastName}`;
  };
};

  //tests
  sumAll([1, 4]);
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  destroyer([1, 2, 3, 1, 2, 3], 3, 2);
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  translatePigLatin("krstvg");
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  pairElement("GCG");
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  addTogether(2,"3");
  var bob = new Person('Bob Ross');
  bob.getFullName();