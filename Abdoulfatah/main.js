const { indigo } = require("color-name");

// **1. Add Up.**
console.log('-----Question 1-----');
function addFunction(x) {
    let sum = 0;
    for (i=1; i <= x; i++) {
        sum+= i;
    } return sum;
}
console.log(addFunction(4));    // 10
console.log(addFunction(13));   // 91
console.log(addFunction(600));  // 180300
// ---------------XXXXX------------------
// **2. Cubed.**
console.log('-----Question 2-----');

function sumOfCubes(x,y,z) {
    if(x== undefined) {x = 0};
    if(y== undefined) {y = 0};
    if(z== undefined) {z = 0};
    let sum =Math.pow(x,3)+ Math.pow(y,3)+ Math.pow(z,3);
    return sum;
}
console.log(sumOfCubes(1,5,9)); //855
console.log(sumOfCubes(2))      // 8
console.log(sumOfCubes())       // 0

// ---------------XXXXX------------------
// **3. String Check.**
console.log('-----Question 3-----');

function isStrInWord(word,string) {
    if (string.startsWith(word)) {
        return true;
    }else return false;
}
console.log(isStrInWord('bu','button'));   //true
console.log(isStrInWord('tri','triplet')); //true
console.log(isStrInWord('beau','pastry')); //false

// ---------------XXXXX------------------
// **4. Less Than or Equal to Zero?**
console.log('-----Question 4-----');

function isLEQZero(x) {
    if (x <= 0) {
        return true;
        }else  {
    }return false;
}
console.log(isLEQZero(3));   // false
console.log(isLEQZero(0));   // true
console.log(isLEQZero(-4));  // true
console.log(isLEQZero(10));  // false

// ---------------XXXXX------------------
// **5. Count Occurrences.**
console.log('-----Question 5-----');

function countOccurrences(String,x) {
    let letterOccurrence = 0;
    for (i= 0; i<= String.length; i++) {
        if( String.charAt(i)== x ) {
            letterOccurrence += 1;
        }
    }return `${x} ==> ${letterOccurrence }`  ;
}
console.log(countOccurrences('this is a string','i')); // i ==> 3

// ---------------XXXXX------------------
// **6. X To The Power of X.**
console.log('-----Question 6-----');

function calcBaseToExponent(x,y) {
    return sum = Math.pow(x,y);
}
console.log(calcBaseToExponent(5,5)); //3125
console.log(calcBaseToExponent(10,10)); //10000000000
console.log(calcBaseToExponent(3,3)); //27

// ---------------XXXXX------------------
// **7. Dog Years.**
console.log('-----Question 7-----');

function dogAge(x) {
    return `Your doggo is ${x*7} years old in human years!`
}
console.log(dogAge(4)); // Your doggo is 28 years old in human years!

// ---------------XXXXX------------------
// **8. A Lifetime Supply...**
console.log('-----Question 8-----');

function calcLifetimeSupply(x,y) {
    let age = (80-x)*365;
    return `You will need ${age* y} bars of chocolate (${y} a day) to last you till the age of 80`
}
console.log(calcLifetimeSupply(25,2));
console.log(calcLifetimeSupply(40,3));

// ---------------XXXXX------------------
// **9. Where's Waldo?**
console.log('-----Question 9-----');

function isWaldoHere(str,subStr) {
    if (str.indexOf(subStr) !== -1) {
        return true;
    } else {
        return false;
    }
}
console.log(isWaldoHere('is there wal here?','Waldo'));  //false
console.log(isWaldoHere('I found you Waldo!','Waldo'));  //true
console.log(isWaldoHere('is wally here?','waldo'));   // false (case sensitive)
console.log(isWaldoHere('Waldo is here','Waldo'));       //true

// or ====================
console.log('Or // using \'includes method\'');

function isWaldoHere2(str,subStr) {
    if (str.includes(subStr)== true) {
        return true;
    } else {
        return false;
    }
}
console.log(isWaldoHere2('is there wal here?','Waldo')); //false
console.log(isWaldoHere2('I found you waldo!', 'waldo')); // true
// but both methods (indexOf and includes) are case sensitive. and the best solution is either to convert both string and subString to lower case using the string.toLowerCase() function.
// or we can use match(/subString/i) function.
function isWaldoHere3(string) {
    let subString = string.match(/waldo/ig);
    if (subString = null){
        return false;
    } else {
        return true;
    }
}
console.log(isWaldoHere3("is Waldo here?")); // true

// ---------------XXXXX------------------
// **10. Pie.**
console.log('-----Question 10-----');

function isEqualSlices(slicesNum,recipientNum,slicesEachPer){
    let fairly = slicesNum /(recipientNum*slicesEachPer);
    if (fairly >= 1) {
        return true;
    } else {
        return false;
    }
}
console.log(isEqualSlices(8,3,2)); //true
console.log(isEqualSlices(8,3,3)); //false
console.log(isEqualSlices(24,12,2)); //true

// ---------------XXXXX------------------
//**11. XO**
console.log('-----Question 11-----');

function isEqualNumXandO(String) {
    let newString = String.toLowerCase();
    let xCounter = 0;
    let oCounter = 0;
    for (i=0; i <= String.length; i++) {
        if (newString.charAt(i)== 'x') {
            xCounter+= 1;
            } else if (newString.charAt(i)== 'o') {
                oCounter+= 1;
            }
        } 
        if (xCounter == oCounter) {
            return true;
            } else {
                return false;
        }
}
console.log(isEqualNumXandO('ooxx')); //true
console.log(isEqualNumXandO('xooxx')); //false
console.log(isEqualNumXandO('ooxXm')); // true
console.log(isEqualNumXandO('zpzpzpp'));  //true
console.log(isEqualNumXandO('zzoo'));   // false