/* 1. 

Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.*/

function sumIntFrom1ToN(integer) {
    let result = 0;
    for (let i = 1; i <= integer; i++) {
        result += i;
    }
    console.log(result);
}
sumIntFrom1ToN(4); // 10
sumIntFrom1ToN(13); // 91
sumIntFrom1ToN(600); // 180300

/* 2. 

Cubed. Create a function that takes in three numbers and returns the sum of its cubes.*/

function sumOfCubes(numb1, numb2, numb3) {
    let result = (numb1 * numb1 * numb1 + numb2 * numb2 * numb2 + numb3 * numb3 * numb3);
    console.log(result);
}
sumOfCubes(1, 5, 9); // 855;
sumOfCubes(2, 0, 0); // 8;
sumOfCubes(0, 0, 0) // 0

/* 3. 

String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.*/

function isStrInWord(string, word) {
    if (word.startsWith(string) == true) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isStrInWord("bu", "button") // true
isStrInWord("tri", "triplet") // true
isStrInWord("beau", "pastry") // false

/* 4. 

Less Than or Equal to Zero? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.*/

function isLEQZero(Number) {
    if (Number <= 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isLEQZero(3) // false
isLEQZero(0) // true
isLEQZero(-4) // true
isLEQZero(10) // false

/* 5. 
Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.*/

function countOccurrences(string, letter) {
    console.log(string.split(letter).length - 1);
}
countOccurrences("this is a string", "i") // 3

/* 6. 
X To The Power of X. Create a function that takes a base number and an exponent number and returns the calculation. NB: All test inputs will be positive integers.

Examples: */


function calcBaseToExponent(baseNumb, exponentNumb) {
    console.log(Math.pow(baseNumb, exponentNumb));
}
calcBaseToExponent(5, 5) // 3125
calcBaseToExponent(10, 10) // 10000000000
calcBaseToExponent(3, 3) // 27

/* 7. 

Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the puppy's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.*/

function dogOld(years) {
    let YearsCalululation = years * 7;
    console.log(`Your doggo is ${YearsCalululation} years old in human years!`);
}
dogOld(4);

/* 8. 
A Lifetime Supply... Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. Bonus Accept floating point values for amount per day and round the result.*/

function calcSupply(age, TimesAday) {
    const YearsLeft = 80 - age;
    console.log(`Years left`, YearsLeft);
    const daysAyear = 365;
    const daysTotal = YearsLeft * daysAyear;
    console.log(`days total`, daysTotal);
    const total = daysTotal * TimesAday;
    console.log(`total supply`, total);
    const SupplyPerDay = total / daysTotal;
    console.log(`supply per day`, SupplyPerDay);
    console.log(`You will need ${total} bars of chocolate ${TimesAday} a day to last you till the age of ${age}`);

}

calcSupply(25, 2); // You will need 40150 bars of chocolate 2 a day to last you till the age of 25
calcSupply(40, 3); //  // You will need 43800 bars of chocolate 2 a day to last you till the age of 25


/* 9. 
Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not. */

function isWaldoHere(string) {
    if ((string.includes("waldo")) || (string.includes("Waldo"))) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isWaldoHere("is there wal here ?") // false
isWaldoHere("I found you Waldo!") // true
isWaldoHere("is wally here?") // false
isWaldoHere("waldo is here") // true


/* 10. 

Pie. Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

Total number of slices.
Number of recipients.
How many slices each person gets.*/

function isEqualSlices(totalNumSlice, numReciepients, slicesPerPerson) {
    if (numReciepients * slicesPerPerson > totalNumSlice) {
        console.log(`not enought slices`, false);
    } else {
        console.log(`enought slices`, true);
    }
}
isEqualSlices(11, 5, 3) // not enought slices false
isEqualSlices(8, 3, 2) // enought slices false
isEqualSlices(8, 3, 3) // not enought slices false
isEqualSlices(24, 12, 2) // enought slices false


/* 11. 

XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

Notes:

Return a boolean value (true or false).
The string can contain any character.
When neither an x nor an o is in the string, return true.*/

function isEqualNumXandO(string) {
    let xx = string.toLowerCase();
    if ((xx.split("o").length - 1) === (xx.split("x").length - 1)) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isEqualNumXandO("ooxx") // true
isEqualNumXandO("xoOxx") // false
isEqualNumXandO("ooxXm") // true (case insensitive)
isEqualNumXandO("zpzpzpp") // true (returns true if no x and o)
isEqualNumXandO("zzoo") // false


/* 12. 

isPrime? Create a function that returns true if a number is prime and false if it's not. NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.*/

/* function isPrime(number1) {
    for (var i = 2; i > 0; i++) {
        if ((number1 % number1[i] === 0) && (number1 % 1 == 0) && (number1 % number1[i] == 0)) {
            console.log(false);
        } else {
            console.log(true);
        }
    } */
/* isPrime(7) // true
isPrime(9) // false
isPrime(10) // false */

/* function isPrime(number) {
    if (number < 2) {
        return false;
    } 
    else { 
        for (let i = 2; i <= number; i++) {
            if (number % i === 0) { 
            return false;
            }
            return true;
        }
    }
} */
/* console.log(`gg,${isPrime(2)}`); // 
console.log(isPrime(3)); // 
console.log(isPrime(5)); // 
console.log(`cc,${isPrime(30)}`);
console.log(`cc,${isPrime(29)}`); // */

function prime2(number2) {
    if (number2 >= 2) {
        if (number2 % 2 === 0 && number2 !== 2) {
            return false;
        } else {
            return true;
        }

    } else {
        return false;
    }
}
console.log(`x ==>, ${prime2(2)}`); // true
console.log(`a ==>, ${prime2(3)}`); // true
console.log(`b ==>, ${prime2(4)}`); // false
console.log(`c ==>, ${prime2(5)}`); // true
console.log(`d ==>, ${prime2(6)}`); // false
console.log(`e ==>, ${prime2(7)}`); // true
console.log(`f ==>, ${prime2(9)}`); // true
console.log(`g ==>, ${prime2(10)}`); // false



/* 13.
Validate Email. Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

The string must contain exactly one "@" character.
The string must contain at least one "." character.
The "." and the "@" must be in the appropriate places.
e.g. "." cannot be the last character.
e.g. "." cannot be directly before or after "@"
e.g. there cannot be consecutive "." characters
e.g. "@" must have at least one character in front of it.
e.g. "j@example.com" is valid while "@example.com" is invalid.
e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.
e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid. */

function emailValidate(email) {
    let mailFormat = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9-]+).([A-Za-z]{2,8})(.[A-Za-z]{2,8})?$/; 
        if (mailFormat.test(email)) /* (email.value.match(mailFormat)) */ {
            return true;
        }
    else {
        alert('Invalid Email Address');
        return false;
    }
}  
console.log(emailValidate(majamarek.design@gmail.com));
console.log(emailValidate(@gmail.com)); 
console.log(emailValidate(majamarek.design.@gmail.com.de));
console.log(emailValidate(majamarek.design@gmail.com)); 



