//**1. Add Up.**
function sumIntFrom1Ton(int) {
  let sum = 0;
  for (i = 0; i <= int; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumIntFrom1Ton(600)); //180300

//**2. Cubed.**
function sumOfCubes(num1, num2, num3) {
  if (num1 == undefined) {
    num1 = 0;
  }
  if (num2 == undefined) {
    num2 = 0;
  }
  if (num3 == undefined) {
    num3 = 0;
  }
  let firstCube = Math.pow(num1, 3);
  let secondCube = Math.pow(num2, 3);
  let thirdCube = Math.pow(num3, 3);
  let sum = firstCube + secondCube + thirdCube;
  return sum;
}
console.log(sumOfCubes(1, 5, 9)); //855
console.log(sumOfCubes(2)); //8
console.log(sumOfCubes()); //0

//**3. String Check.**
function isStrInWord(str, word) {
  if (word.slice(0, str.length) == str) {
    return true;
  } else {
    return false;
  }
}
console.log(isStrInWord("beau", "pastry")); //false

//**4. Less Than or Equal to Zero?**
function isLEQZero(num) {
  if (num <= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLEQZero(-4)); //true

//**5. Count Occurrences.**

function countOccurences(str, letter) {
  let occ = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] == letter) {
      occ = occ + 1;
    }
  }
  return occ;
}
console.log(countOccurences("this is a string", "i")); //3

//**6. X To The Power of X.**

function calcBaseToExponent(basenum, exponum) {
  return Math.pow(basenum, exponum);
}
console.log(calcBaseToExponent(5, 5)); //3125

//**7. Dog Years.**
function dogAge(ageOfDog) {
  let dogYear = ageOfDog * 7;
  let message = `Your doggo is ${dogYear} years old in human years!`;
  return message;
}
console.log(dogAge(4));

//**8. A Lifetime Supply...**
let favoriteSnack = "chocolate";

function calcSupply(age, amountPerDay) {
  let numberOfAmount = parseInt(amountPerDay);

  let stringOfAmount = amountPerDay.split(numberOfAmount)[1].trim();

  //console.log("number of am is:" + numberOfAmount);
  //console.log("string of am is:" + stringOfAmount);
  if (stringOfAmount[stringOfAmount.length - 1] !== "s") {
    stringOfAmount = stringOfAmount + "s";
  }

  let maxAge = 80;
  let need = (maxAge - age) * 365 * numberOfAmount;
  console.log(
    `You will need ${need} ${stringOfAmount} of ${favoriteSnack}(${amountPerDay} a day) to last you till the age of ${maxAge}.`
  );
}

calcSupply(40, "2 bars");

//**9. Where's Waldo?**
function isWaldoHere(str) {
  str.lowerCase;
  if (str.includes("?")) {
    return false;
  } else if (str.includes("waldo")) {
    return true;
  } else {
    return false;
  }
}
console.log(isWaldoHere("WHERE IS WALDO?")); //false

//**10. Pie.**
function isEqualSlices(totalSlices, people, eachSlices) {
  if (eachSlices * people > totalSlices) {
    return false;
  } else {
    return true;
  }
}
console.log(isEqualSlices(8, 3, 2)); //true

//**11. XO**
function isEqualNumXandO(str) {
  let numofx = 0;
  let numofo = 0;
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "x" || arr[i] == "X") {
      numofx = numofx + 1;
    } else if (arr[i] == "o" || arr[i] == "O") {
      numofo = numofo + 1;
    }
  }
  if (numofo == numofx) {
    return true;
  } else {
    return false;
  }
}
console.log(isEqualNumXandO("abcd")); //true

//**12. isPrime?**
function isPrime(num) {
  if (num == 2 || num == 3) {
    return true;
  } else {
    for (var x = 2; x < num; x++) {
      if (num % x == 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(isPrime(17)); //true

//**13. Validate Email.**

function validateEmails(email) {
  if (email.includes("@") && email.includes(".")) {
    let whereisq = email.indexOf("@");
    let whereisdot = email.indexOf(".");
    if (email.lastIndexOf("@") !== email.indexOf("@")) {
      return false;
    } else if (email.indexOf("@") == 0) {
      return false;
    } else if (
      email.indexOf(".") == email.indexOf("@") - 1 ||
      email.indexOf(".") == email.indexOf("@") + 1
    ) {
      return false;
    } else if (whereisq == 0) {
      return false;
    } else if (email.charAt(whereisdot + 1) == ".") {
      return false;
    } else if (charAt(email.length - 1) == ".") {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
console.log(validateEmails("john.@email.com"));
