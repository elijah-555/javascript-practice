// Createa  function that takes two arguments as functions and returns their sum
// when calling a function, if you want to use a value you must remember to return sommething
function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(3, 8));

// Create a function that converts hours into seconds

function hoursIntoSeconds(hour) {
  return hour * 3600;
}

console.log(hoursIntoSeconds(3));

// Create a function that takes the length and width of a rectangle and return its perimeter

function calcPerimeter(length, width) {
  return width * 2 + length * 2;
}

console.log(calcPerimeter(20, 10));

// Write a function that takes the base and height of a triangle and return its area.

function calcAreaOfTriangle(base, height) {
  return 0.5 * base * height;
}

console.log(calcAreaOfTriangle(20, 20));

// Write a function that accepts a string and adds "Frontend" to the end of it

function appendFrontend(string) {
  return string + "Frontend";
}

console.log(appendFrontend("Apple"));

// Given two numbers, return true if the sum of bother numbers is greater than 100
// otherwise, return false

function sumGreaterThan100(num1, num2) {
  return num1 + num2 > 100;
}

console.log(sumGreaterThan100(50, 60));

// Write  function that accepts a number
// and returns it true if it is less than or equal to zero
// otherwise, return false

function lessThanOrEqualToZero(num) {
  return num <= 0;
}

console.log(lessThanOrEqualToZero(0));

// Given a boolean (true or false), return the opposite boolean

function oppositeBoolean(boolean) {
  return !boolean;
}

console.log(oppositeBoolean(false));

// if a boolean is returned, you can return it straight away without extra code.

// Given any element, return true if it is NOT 0

function isNotZero(elem) {
  return elem !== 0;
}

console.log(isNotZero());

// given two numbers, return their remainder when divided by each other.

function calcRemainder(num1, num2) {
  return num1 % num2;
}

console.log(calcRemainder(4, 2));

// Given a number, return true if the number is odd
// otherwise return false

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(15));

// create a function that takes a number argument and returns 1 if the number is even
// if the number is odd return -1

function booleanInteger(num) {
  return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(4));

// create a function that takes in two strings
// if the first string is equal to 'LOGGED_IN' AND the second string
// is equal to 'SUBSCRIBED' return true, otherwise return false

function isLoggedInAndSubscribed(str1, str2) {
  return str1 === "LOGGED_IN" && str2 === "SUBSCRIBED";
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));

// create a function that takes in two strings
// if the first string is equal to 'LOGGED_IN' OR the second string
// is equal to 'SUBSCRIBED' return true, otherwise return false

function isLoggedInOrSubscribed(str1, str2) {
  return str1 === "LOGGED_IN" || str2 === "SUBSCRIBED";
}

console.log(isLoggedInOrSubscribed("LOGGED_OUT", "SUBSCRIBED"));

// Given two values, return the first one if it is falsy
// otherwise return the second one

function filterOutFalsy(elem1, elem2) {
  // one line version
  // return !elem1 ? elem1 : elem2
  if (!elem1) {
    return elem1;
  } else {
    return elem2;
  }
}

console.log(filterOutFalsy(5, 10));

// given an array, return it's length

function returnArrayLength(arr) {
  return arr.length;
}

console.log(returnArrayLength([1, 2, 3, 4]));

// given an array, return the last element

function arrLength(arr) {
  return arr[arr.length - 1];
}

console.log(arrLength([1, 2, 3, 5, 6, 9]));

// given an array, return the sum of every element

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(
  arrSum([1, 2, 3, 7, 12, 28, 26, 78, 124, 5907, 26, 4, 5, 3, 1, 0, 1234])
);

// given a number, add up all the numbers from one to the number that is given

function progressiveSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; ++i) {
    sum = sum + i;
  }
  return sum;
}

console.log(progressiveSum(5));

// given a number in seconds, return this number in mm:ss format

function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

  if (timerMinutes.toString().length === 1) {
    timerMinutes = "0" + timerMinutes;
  }

  return timerMinutes + ":" + timerSeconds;
}

console.log(calcTime(5000));

// given an array, return the largest number of that array

function getMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(getMax([-500, -200, -300]));

// given a string , return the reversed string

function reverseString(str) {
  let reversedString = "";
  for (let i = 0; i < str.length; ++i) {
    reversedString = str[i] + reversedString;
  }
  return reversedString;
}

console.log(reverseString("abc"));

// to convert a string to an array add .split to the end
// .reverse reverses an array
// .join converts array to string

console.log("abc".split("").reverse().join(""));

// given an array, return all the elements as 0

function convertToZero(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = 0;
  }
  return newArr;
}

console.log(convertToZero([12]));

// array.fill method

function convertToZeroFill(arr) {
  return new Array(arr.length).fill(0);
}

console.log(convertToZeroFill([1, 2, 3, 4, 5]));

// array.map method
// map converts every element of array to what is on the right side of arrow function

function convertToZeroMap(arr) {
  return arr.map((elem) => 0);
}

console.log(convertToZeroMap([1, 2, 3, 4]));

// given an array of fruits, if it is an apple remove it from the array

function removeApples(arr) {
  let noApples = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== "Apple") {
      noApples.push(arr[i]);
    }
  }
  return noApples;
}

console.log(removeApples(["Banana", "Orange", "Apple", "Mango"]));

// array.filter method

function removeApplesFilter(arr) {
  return arr.filter(elem => elem !== 'Apple')
}

console.log(removeApplesFilter(["Banana", "Orange", "Apple", "Mango"]));

// Given an array of values, filter out all the falsy values
// only return the truthy values

// array.filter method

function filterOutFalsyTwo(arr) {
  return arr.filter(elem => !!elem === true)
}

console.log(filterOutFalsyTwo(['', NaN, undefined, null, false, 0]));

// for loop method

function filterOutFalsyFor(arr) {
  truthyArr = []
  for (let i = 0; i < arr.length; ++i) {
    if (!!arr[i] === true) {
      truthyArr.push(arr[i])
    }
  }
  return truthyArr
}

console.log(filterOutFalsyFor(['', NaN, undefined, null, false, 0]));

// Given an array of truthy and falsy values, return the sae array of elements into its boolean values

function convertToBoolean(arr) {
  return arr.map(elem => !!elem)
}
