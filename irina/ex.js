// Functions Exercises
// Print your answers to the console.

const { turquoise } = require("color-name");

// 1. Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// Examples:


let counter = 3;
function sumIntFrom1ToN(num1) {
for (let i = 0; i <= counter; i++) {
    num1 = num1 + i;
    //console.log(num1);
/*0 i=0
1   i=1
3   i=2
6   i=3
10  i=4
 */
} console.log(num1); //take into consideration index0. 
}sumIntFrom1ToN(4) // 10
counter = 12;
sumIntFrom1ToN(13) //91
counter = 599;
sumIntFrom1ToN(600) //180300

// 2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.

// Examples:
let expo = 3;
let result;
function sumOfCubes(num1, num2, num3) {  
result  = Math.pow(num1, expo) + Math.pow(num2, expo) + Math.pow(num3, expo);
return result; // 855
} 
console.log(sumOfCubes(1, 5, 9)) // 855,  Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

//OR

function sumOfCubes2(num1) {
    let sum = 0;
    for (let i = 1; i <= num1; i++) {
      sum = Math.pow(i, 3);
    }
    return sum;
  }
  console.log(sumOfCubes2(2)); //8
  console.log(sumOfCubes2()); // 0


// 3. String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

function isStrInWord(initial_string, word) {
  if (word.includes(initial_string)) {
    return true;
  }
  else{
    return false;
  }
}
console.log(isStrInWord("bu", "button")); //true
console.log(isStrInWord("tri", "triplet")); //true
console.log(isStrInWord("beau", "pastry")); //false


// 4. Less Than or Equal to Zero? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples:
function isLEQZero(num1) {
  if (num1 <= 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isLEQZero(3)) //false
console.log(isLEQZero(0)) // true
console.log(isLEQZero(-4)) // true
console.log(isLEQZero(10)) // false


// 5. Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

function countOccurrences(str, letter) 
{
 var result = 0;
 for (let i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) === letter) 
      {
      result += 1;
      }
  }
  return `Ocurrences of ${letter} is ${result}.`;
}

console.log(countOccurrences("this is a string", "i")); //Ocurrences of i is 3.
console.log(countOccurrences("second example", "d")); // Ocurrences of d is 1.


// 6. X To The Power of X. Create a function that takes a base number and an exponent number and returns the calculation. NB: All test inputs will be positive integers.

function calcBaseToExponent(x) {
  let result = 1;
  for (let i = 0; i < x; i++) {
      result = result * x;
      //console.log(result);
      /*
 5 = 5^1
25 = 5^2
125 = 5^3
625
3125
3125
      */
  }
  return result;
} 
console.log( calcBaseToExponent(5)); //3125
console.log(calcBaseToExponent(10)); //10000000000

// 7. Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the puppy's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

function dogAge(puppyAge) {
  let x = 7;
  return `Your dog is ${puppyAge * x} in human years!`;
}
console.log(dogAge(4)) //Your dog is 28 in human years!

// 8. A Lifetime Supply... Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. Bonus Accept floating point values for amount per day and round the result.

function calcLifetimeSupply(age, amount_per_day) {
  let ageMax = 80;
  let totalAmount = (amount_per_day * 365) * (ageMax - age);
  return `You will need ${totalAmount} of snacks to last you till the age of  ${ageMax}.`;
}
console.log(calcLifetimeSupply(25, 2)); //You will need 40150 of snacks to last you till the age of  80.
console.log(calcLifetimeSupply(40, 3)); //You will need 43800 of snacks to last you till the age of  80.


// 9. Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.

function isWaldoHere(string) {
  if (string.includes("Waldo") || string.includes("waldo")) {
    return true;
  }
else {
  return false;
}
}
console.log(isWaldoHere("is there wal here ?")); //false
console.log(isWaldoHere("I found you Waldo!")); //true
console.log(isWaldoHere("is wally here?")); //false
console.log(isWaldoHere("waldo is here")); //true

// 10. Pie. Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// Examples:

function isEqualSlices(total, recipients, slice){

  if ((recipients * slice) <= total) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isEqualSlices(11, 5, 3)) // false -->  5 people x 3 slices each = 15 slices > 11 slices

console.log(isEqualSlices(24, 12, 2)); //true


// 11. XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Notes:

// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
function isEqualNumXandO(str) {
  str = str.toLowerCase();

  // put the string into an array
  var arrayOfCharacters = str.split("");

  //count the x's // reduce vai agrupar os valores da string ou da funcao. 
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  var countX = arrayOfCharacters.reduce( function( n, val ) {
      return n + (val === 'x');
    }, 0);
    
  // count the o's
  var countO = arrayOfCharacters.reduce( function( n, val ) {
      return n + (val === 'o');
    }, 0);
  
  // do these numbers match? if so return true and if not return false
  if ( countX == countO ) {
    return true;
  } else {
    return false;
  }


}
console.log(isEqualNumXandO("ooxx"));
//  ➞ true
console.log(isEqualNumXandO("xooxx") );
// ➞ false
console.log(isEqualNumXandO("ooxXm"));
//  ➞ true (case insensitive)
console.log( isEqualNumXandO("zpzpzpp"));
// ➞ true (returns true if no x and o)
console.log(isEqualNumXandO("zzoo"));
//  ➞ false

// 12. isPrime? Create a function that returns true if a number is prime and false if it's not. NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

function isPrime(number) {

  if (number === 1) {
    return false;
  }
  else if(number === 2) {
    return true;

  }else {
    for(var i = 2; i < number; i++)
    {
      if(number % i === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(isPrime(2)); //true
console.log(isPrime(7)); //true
console.log(isPrime(9)); //false
console.log(isPrime(10)); //false



// 13. Validate Email. Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

// NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:
//https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript


// The "." and the "@" must be in the appropriate places.
// e.g. "." cannot be the last character.
// e.g. "." cannot be directly before or after "@"
// e.g. there cannot be consecutive "." characters
// e.g. "@" must have at least one character in front of it.
// e.g. "j@example.com" is valid while "@example.com" is invalid.
// e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.
// e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid.

function validate_email(email) {
  let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //RFC 2822 
  if (re.test(email)) {
    return true;
  }
  else {
    return false;
  }
}
console.log(validate_email("j@example.com")); //true
console.log(validate_email("@example.com")); //false
console.log(validate_email("john.smith@com")); //false
console.log(validate_email("john.smith@email.com")); //true
console.log(validate_email("john..smith@email.com")); // true

