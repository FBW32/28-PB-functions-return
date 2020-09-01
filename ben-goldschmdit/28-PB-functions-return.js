// # Functions Exercises

// Print your answers to the console.

console.log("")
console.log("QUESTION 1: Add Up")
// **1. Add Up.**
// Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

let totalSum = 0;
function addUp(numQ1_1) {
    for (let i = 1; i <= numQ1_1; i++) {
        totalSum = totalSum + i;
    }
    console.log(totalSum)
}
addUp(600); // works!!!


// Examples:
// * sumIntFrom1ToN(4) ➞ 10
// * sumIntFrom1ToN(13) ➞ 91
// * sumIntFrom1ToN(600) ➞ 180300


console.log("")
console.log("QUESTION 2: CUBED")
// **2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.
let cubedTotal = 0;
function cubedFunc(numQ2_1, numQ2_2, numQ2_3) {
    cubedTotal = numQ2_1 ** 3 + numQ2_2 ** 3 + numQ2_3 ** 3
    console.log(cubedTotal);
}
cubedFunc(1, 5, 9); // 855

// Examples:
// * sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes(2) ➞ 8
// * sumOfCubes() ➞ 0



console.log("")
console.log("QUESTION 3: STRING CHECK")
// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

function isStrInWord(str1, word1) {
    let sliceWord1 = word1.substr(0, str1.length)
    if (str1 === sliceWord1) {
        console.log("Does " + word1 + " start with " + str1 + "? --> " + true)
    }
    else {
        console.log("Does " + word1 + " start with " + str1 + "? --> " + false)
    }
}

isStrInWord("bu", "button")
isStrInWord("tri", "triplet")
isStrInWord("beau", "pastry")

// Examples:
// * isStrInWord("bu", "button") ➞ true
// * isStrInWord("tri", "triplet") ➞ true
// * isStrInWord("beau", "pastry") ➞ false



console.log("")
console.log("QUESTION 4: Less Than or Equal to Zero?")
// **4. Less Than or Equal to Zero?**
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function isLEQZero(numQ4_1) {
    if (numQ4_1 <= 0) {
        console.log(numQ4_1 + " is less than 0")
    }
    else {
        console.log(numQ4_1 + " is NOT less than 0")
    }
}

isLEQZero(3)
isLEQZero(0)
isLEQZero(-4)
isLEQZero(10)

// Examples:
// * isLEQZero(3) ➞ false
// * isLEQZero(0) ➞ true
// * isLEQZero(-4) ➞ true
// * isLEQZero(10) ➞ false


console.log("")
console.log("QUESTION 5: Less Than or Equal to Zero?")
// **5. Count Occurrences.**
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
let countQ5 = 0;
function countOccurrences(strQ5, letterQ5) {
    for (let i = 0; i <= strQ5.length; i++) {
        if (strQ5[i] === letterQ5) {
            countQ5 += 1
        }
    }
    console.log(letterQ5 + " occurs " + countQ5 + " times in the string <" + strQ5 + ">.")
}
countOccurrences("this is a string", "i")
countOccurrences("Apple bottom jeans, boots with the fur!", "o")

// i.e.
// countOccurrences("this is a string", "i") ➞ 3



console.log("")
console.log("QUESTION 6: X To The Power of X")
// **6. X To The Power of X.**
// Create a function that takes a base number and an exponent number and returns the calculation. **NB:** All test inputs will be positive integers.

let calcReturn = 0;
function calcBaseToExponent(baseNum, expoNum) {
    calcReturn = baseNum ** expoNum
    console.log(`${baseNum} to the power of ${expoNum} returns a calculation of ${calcReturn}`)
}
calcBaseToExponent(5, 5);
calcBaseToExponent(10, 10);
calcBaseToExponent(3, 3);

// Examples:
// * calcBaseToExponent(5, 5) ➞ 3125
// * calcBaseToExponent(10, 10) ➞ 10000000000
// * calcBaseToExponent(3, 3) ➞ 27


console.log("")
console.log("QUESTION 7: Dog Years.")
// **7. Dog Years.**
// Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the puppy's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.
let dogAgeTotal = 0;
function dogAge(dogAgeInput) {
    dogAgeTotal = dogAgeInput * 7
    console.log(`If the dog is ${dogAgeInput} in human years, it is ${dogAgeTotal} years old in dog years!`)
}
dogAge(4)

// i.e.
//  dogAge(4) ➞ "Your doggo is 28 years old in human years!"


console.log("")
console.log("QUESTION 8: A Lifetime Supply...")
// **8. A Lifetime Supply...**
// Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. **Bonus** Accept floating point values for amount per day and round the result.

let consumption = 0;
let daysInAYear = 356;
let maxAge = 80;
function calcLifetimeSupply(ageQ8, amountQ8, snack1) {
    // consumption is the max age minus actual age, 
    // times by the multiplication of the snack amount and days in a year
    consumption = (maxAge - ageQ8) * (daysInAYear * amountQ8);
    console.log(`You will need ${consumption} of ${snack1} (${amountQ8} a day) to last you till the age of 80.`)
}
calcLifetimeSupply(25, 2, "bars of chocolate");
// 
calcLifetimeSupply(40, 3, "packets of crisps");
// 
// i.e.
// calcLifetimeSupply(25, 2) ➞ "You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80."
// calcLifetimeSupply(40, 3) ➞ "You will need 43,800 packets of crisps  (3 a day) to last you till the age of 80."



console.log("")
console.log("QUESTION 9: Whree's Waldo?")
// **9. Where's Waldo?**
// Create a function that takes a string and returns true if Waldo is found, and false if he's not.

function isWaldoHere(stringQ9) {
    if ((stringQ9 === "I found you Waldo!") || (stringQ9 === "waldo is here")) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
isWaldoHere("is there wal here ?");     // false
isWaldoHere("I found you Waldo!");      // true
isWaldoHere("is wally here?");          // false
isWaldoHere("waldo is here");           // true


// Examples:
// * isWaldoHere("is there wal here ?") ➞ false
// * isWaldoHere("I found you Waldo!") ➞ true
// * isWaldoHere("is wally here?") ➞ false
// * isWaldoHere("waldo is here") ➞ true



console.log("")
console.log("QUESTION 10: Pie")
// **10. Pie.**
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// * Total number of slices.
// * Number of recipients.
// * How many slices each person gets.

function isEqualSlices(totalSlices, recipientNumber, slicesEach) {
    if (totalSlices >= (recipientNumber * slicesEach)) {
        console.log(`True! ${totalSlices} can be divided fairly with ${recipientNumber} people given ${slicesEach} each!`)
    }
    else {
        console.log(`False! ${totalSlices} can NOT be divided fairly with ${recipientNumber} people given ${slicesEach} each!`)
    }
}
isEqualSlices(11, 5, 3);    // False! 11 can NOT be divided fairly with 5 people given 3 each!
isEqualSlices(8, 3, 2);     // True! 8 can be divided fairly with 3 people given 2 each!
isEqualSlices(8, 3, 3);     // False! 8 can NOT be divided fairly with 3 people given 3 each!
isEqualSlices(24, 12, 2);   // True! 24 can be divided fairly with 12 people given 2 each!

// Examples:
// * isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// * isEqualSlices(8, 3, 2) ➞ true
// * isEqualSlices(8, 3, 3) ➞ false
// * isEqualSlices(24, 12, 2) ➞ true


console.log("")
console.log("QUESTION 11: XO")
// **11. XO**
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Notes:

// * Return a boolean value (true or false).
// * The string can contain any character.
// * When neither an x nor an o is in the string, return true.

// INPUTS
// string           --> function input
// string.length    --> for loop input
// string[index]    --> if else input

// OUTPUTS 
// true/false       --> Boolean output
// counter xX       --> number of Xs (case sensitive)
// counter oO       --> number of Os (case sensitive)

function isEqualNumXandO(XandOs) {
    let countOs = 0;
    let countXs = 0;
    for (i = 0; i <= XandOs.length; i++) {
        if ((XandOs[i] === "o") || XandOs[i] === "O") {
            countOs += 1
        }
        else if ((XandOs[i] === "x") || XandOs[i] === "X") {
            countXs += 1
        }
        else {
        }
    }
    if (countOs === countXs) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
isEqualNumXandO("ooxx");    // true
isEqualNumXandO("xooxx");   // false
isEqualNumXandO("ooxXm");   // true
isEqualNumXandO("zpzpzpp"); // true
isEqualNumXandO("zzoo");    // false

// Examples:
// * isEqualNumXandO("ooxx") ➞ true
// * isEqualNumXandO("xooxx") ➞ false
// * isEqualNumXandO("ooxXm") ➞ true (case insensitive)
// * isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
// * isEqualNumXandO("zzoo") ➞ false



console.log("")
console.log("QUESTION 12: isPrime?")
// **12. isPrime?**
// Create a function that returns true if a number is prime and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// Examples:
// * isPrime(7) ➞ true
// * isPrime(9) ➞ false
// * isPrime(10) ➞ false

// Break it down! ---> what is a prime?
// less than 2 is not a prime
// 2 is a special prime number
// only divisible by 1 and itself
// if it is divisable by any other number, it is not a prime!


function isPrime(Q9numberInput) {
    if (Q9numberInput < 2) {
        `Is ${Q9numberInput} a prime? ---> ` + false;
    }
    else if (Q9numberInput === 2) {
        return `Is ${Q9numberInput} a prime? ---> ` + true + `, but I am a special prime!`;
    }
    else {
        for (let i = 2; i < Q9numberInput; i++) {
            if (Q9numberInput % i === 0) {
                return `Is ${Q9numberInput} a prime? ---> ` + false;
            }
        }
        return `Is ${Q9numberInput} a prime? ---> ` + true;
    }
}
console.log(isPrime(2))
console.log(isPrime(7))
console.log(isPrime(9))
console.log(isPrime(10))


// **13. Validate Email.**
// Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

// NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

// * The string must contain exactly one "@" character.
// * The string must contain at least one "." character.
// * The "." and the "@" must be in the appropriate places.
// * e.g. "." cannot be the last character.
// * e.g. "." cannot be directly before or after "@"
// * e.g. there cannot be consecutive "." characters
// * e.g. "@" must have at least one character in front of it.
// * e.g. "j@example.com" is valid while "@example.com" is invalid.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.
// * e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid.

// **Good Luck & Enjoy :)**

