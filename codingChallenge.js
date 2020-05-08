//1. Create a function that takes any non-negative integer as an argument and return it with its digits in descending order.

function descendingOrder(num) {
  // convert number to string type
  let numToStr = num.toString();
  // convert string into array to access reverse method
  let numArrReversed = numToStr.split("").reverse();
  // join the reversed number strings into a single str
  let result = numArrReversed.join("");
  // return the result as a str *** question doesn't specify whether return value is string or number ***
  // if you need a number value return Number(result)
  return result;
}

//2. Given a string of words, return the length of the shortest word(s). The given data will always be a string and will never be empty.

function shortestWord(words) {
  // save shortest value in a variable, initialize as Infinity because any letterCount will be less than infinity
  let shortest = Infinity;
  // alphabet variable to compare letters to, special characters won't be a problem
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  // make letters lowercase to compare to alphabet, and separate words into indiviudal words in an array
  let wordsArr = words.toLowerCase().split(" ");
  // loop over each word
  wordsArr.forEach((word) => {
    // initialize a letter count as 0 for each word
    let letterCount = 0;
    // loop over each letter
    for (const letter of word) {
      // check if letter is contained in the alphabet array, if it is add 1 to the letter count
      if (alphabet.indexOf(letter) > -1) {
        letterCount++;
      }
    }
    // after you have checked each letter, compare the current letter count to the saved shortest word count
    // if the word is shorter, the value will be saved in the shortest variable
    if (letterCount < shortest) {
      shortest = letterCount;
    }
  });
  // return the shortest word length
  return shortest;
}

//3. Given a number return the sum of all the multiples of 3 or 5 below the given number.

function sumMultiplesThreeOrFive(num) {
  // initialize the sum to be zero so if there are no multiples of 3 or 5, return will be zero
  let sum = 0;
  // loop from 3 up to the given number
  for (let i = 3; i < num; i++) {
    // if the current number is divisble by either 3 or 5 evenly (with no remainder), then you add that number to the sum
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  // return the total sum of the multiples of 3 or 5 below the given number
  return sum;
}

//4. Write a function that takes in an array as an argument. The function moves all of the zeros to the end of the array while ensuring the order of the other elements are unchanged.

function zeroesToEnd(arr) {
  // inititialize an empty array to push elements into
  let result = [];
  // count the number of zeroes in the array to later add those to the end
  let numberOfZeroes = 0;
  // loop over the array
  arr.forEach((ele) => {
    // check if the current element is zero, if it is, increment the count of zeroes
    if (ele === 0) {
      numberOfZeroes++;
    } else {
      // if its not, push that element into the result array maintaining position
      result.push(ele);
    }
  });
  // loop to the number of zeroes that occured in the array
  for (let i = 0; i < numberOfZeroes; i++) {
    // push a zero into the resulting array for each time it appeared in the original array
    result.push(0);
  }
  // return the array with all the zeroes at the end, maintaining positions of all other elements
  return result;
}
