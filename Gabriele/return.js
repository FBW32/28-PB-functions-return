// 1. Add Up.
// Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples:

// sumIntFrom1ToN(4) ➞ 10
// sumIntFrom1ToN(13) ➞ 91
// sumIntFrom1ToN(600) ➞ 180300


function addUp(myNum) {
let result = 0;
for (let i = 1; i <= myNum; i++) {
     result += i;
}
return console.log(result);
}


addUp(4); // 10
addUp(5); // 15 
addUp(8);  // 36

 

// 2. Cubed.
// Create a function that takes in three numbers and returns the sum of its cubes.
// Examples:
// sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes(2) ➞ 8
// sumOfCubes() ➞ 0

function cubed(num1, num2, num3) {

   result = Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);
   return console.log(result);
  
}

cubed(1, 5, 9); // 855
cubed(14, 3, 11); // 4102 


// 3. String Check.
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

// Examples:

// isStrInWord("bu", "button") ➞ true
// isStrInWord("tri", "triplet") ➞ true
// isStrInWord("beau", "pastry") ➞ false

function strCheck(myStr, myWord) {
if (myStr.slice(0, 2) === myWord.slice(0,2)) {
   return console.log(true)
} else {
   return console.log(false);
}

}

strCheck("bu", "button"); // true
strCheck("beau", "pastry"); // false 
strCheck("Java", "JavaScript")  // true


// 4. Less Than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples:

// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false

function lessEquZero(myNum) {
   if (myNum <= 0) {
      return console.log('task 4', true);
   }else {

      return console.log('task 4', false);
   }
}

lessEquZero(3); // false
lessEquZero(-3) // true 
lessEquZero(10) // false



// 5. Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// i.e.
// countOccurrences("this is a string", "i") ➞ 3


function countOcc(myStr, myLett) {
counter = 0;
   for (let i = 0; i <= myStr.length; i++) {
      if (myLett === myStr.split("")[i]) {
         counter = counter + 1;
      }
   }
   return console.log(counter);
}

countOcc("this is a string", "i")  // 3
countOcc("I try to learn functions in Javascript", "y") // 1 
countOcc("I try to learn functions in Javascript", "t") // 4


// 6. X To The Power of X.
// Create a function that takes a base number and an exponent number and returns the calculation. NB: All test inputs will be positive integers.

// Examples:

// calcBaseToExponent(5, 5) ➞ 3125
// calcBaseToExponent(10, 10) ➞ 10000000000
// calcBaseToExponent(3, 3) ➞ 27


function toThePower(base, expo) {
   return console.log(Math.pow(base, expo));
}
toThePower(5, 5) //  3125
toThePower(3, 4)  // 81

// or 

function toThePower2(base, expo) {
   for (let i = 1; i <= expo; i++) {
   result = base ** i;
   }
   return console.log('task 6, 2nd way', result);
}

toThePower2(5, 5);  // 3125
toThePower2(3, 3); // 27

// 7. Dog Years.
// Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the puppy's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

// i.e.
// dogAge(4) ➞ "Your doggo is 28 years old in human years!"

function dogAge(humanYears) {
result = humanYears * 7;
return console.log(`Your doggo is ${result} years old in human years!`)
}
dogAge(3); // Your doggo is 21 years old in human years!
dogAge(5); //  Your doggo is 35 years old in human years!

// 8. A Lifetime Supply...
// Create a function to calculate how much you'll actually be getting for a lifetime supply of your favorite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. Bonus Accept floating point values for amount per day and round the result.

// i.e.

// calcLifetimeSupply(25, 2) ➞ "You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80."

// calcLifetimeSupply(40, 3) ➞ "You will need 43,800 packets of crisps (3 a day) to last you till the age of 80."

function lifeSupply(age, amount) {
  let yearsLeft = 80 - age;
  let result = yearsLeft * 365;

  return console.log(`You will need ${result} brokkoli (1 a day) to last you till the age of 80.`)

}

lifeSupply(38, 1);  // You will need 15330 brokkoli (1 a day) to last you till the age of 80.


// 9. Where's Waldo?
// Create a function that takes a string and returns true if Waldo is found, and false if he's not.

// Examples:

// isWaldoHere("is there wal here ?") ➞ false
// isWaldoHere("I found you Waldo!") ➞ true
// isWaldoHere("is wally here?") ➞ false
// isWaldoHere("waldo is here") ➞ true

function whereWaldo(myStr) {
   myStr.split(" ").includes("waldo") ?  console.log(true) : console.log(false);
return
}

whereWaldo("I am with waldo"); // true
whereWaldo("I am with waldy");  // false


// 10. Pie.
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// Examples:

// isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices

// isEqualSlices(8, 3, 2) ➞ true

// isEqualSlices(8, 3, 3) ➞ false

// isEqualSlices(24, 12, 2) ➞ true

function shareThePie(x, y, z) {
    (x >= y * z) ? console.log(true, "-> pie can be shared" ) : console.log(false, "-> not enough pie")
  
}

shareThePie(10, 5, 2); // true -> pie can be shared
shareThePie(5, 3, 2); // false -> not enough pie 


// 11. XO
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Notes:

// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:

// isEqualNumXandO("ooxx") ➞ true
// isEqualNumXandO("xooxx") ➞ false
// isEqualNumXandO("ooxXm") ➞ true (case insensitive)
// isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
// isEqualNumXandO("zzoo") ➞ false

function numXandO(givenStr, letter) {
   let counter = 0;
   for (let i = 0; i <= givenStr.length; i++) {
     if (givenStr.split("")[i] === letter) {
      counter = counter + 1;
     }
   }
   console.log(`${letter}:`, counter);
   return counter;
}

function isEqualNumXandO(myStr) { 
   (numXandO(myStr, "x") === numXandO(myStr, "o")) ? console.log(true, 'same number of X and O') : console.log(false, 'not same number of x and o');

}

isEqualNumXandO("ooxxox");  // true same number of X and O
isEqualNumXandO("zzoo"); // false not same number of x and o




// 12. isPrime?
// Create a function that returns true if a number is prime and false if it's not. NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// Examples:

// isPrime(7) ➞ true
// isPrime(9) ➞ false
// isPrime(10) ➞ false

function primeNum(myNum) { 

   if (myNum === 1) {
      return false;
   } else if (myNum === 2) {
      return true;
   } else 
    for (let i = 2; i < myNum; i++) {
       if (myNum % i === 0) {
         console.log(false); 
         return false
       }
       console.log(true);
      return true
      
   }
   return myNum;
}

primeNum(24); // false
primeNum(23); // true

// 13. Validate Email.
// Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

// NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

// The string must contain exactly one "@" character.
// The string must contain at least one "." character.
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
