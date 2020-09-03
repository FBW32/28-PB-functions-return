//1

function addUp(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));
//2
function cubed(num1, num2, num3) {
  let sumOfCubed = 0;
  if (num1 === undefined) {
    num1 = 0;
  }
  if (num2 == undefined) {
    num2 = 0;
  }
  if (num3 == undefined) {
    num3 = 0;
  }
  sumOfCubed = num1 ** 3 + num2 ** 3 + num3 ** 3;
  return sumOfCubed;
}
console.log(cubed());
console.log(cubed(2));
console.log(cubed(1, 5, 9));

//3
function stringCheck(str1, str2) {
  let myWord = str1.split("");
  let myString = str2.split("");
  for (let i = 0; i < str1.length; i++) {
    if (myString[i] == myWord[i]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(stringCheck("bu", "button"));
console.log(stringCheck("tri", "triplet"));
console.log(stringCheck("beau", "pastry"));

//4
function isEqualToZero(number) {
  if (number <= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEqualToZero(3));
console.log(isEqualToZero(0));
console.log(isEqualToZero(-4));

//5
function occurenceCount(str, letter) {
  let letter_Count = 0;
  for (let position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}

console.log(occurenceCount("this is a string", "i"));

//6
function calBaseExponent(number1, number2) {
  return number1 ** number2;
}
console.log(calBaseExponent(5, 5));
console.log(calBaseExponent(3, 3));

//7
function dogYears(age) {
  let i = age * 7;
  let result = `your dog is ${i} years old in human years!`;
  return result;
}
console.log(dogYears(4));

//8
function lifeSupply(age, amount) {
  let mayAge = 80;
  let rest = 80 - age;
  let result = Math.round(rest * 365 * amount);
  let resultStr = `you will need ${rest} years to 80 and ${result} coffe`;
  return resultStr;
}
console.log(lifeSupply(30, 2));
console.log(lifeSupply(40, 3));

//9
function isWaldoHere(str) {
  let mystring = str;
  if (mystring.includes("Waldo")) {
    return true;
  } else {
    return false;
  }
}
console.log(isWaldoHere("i found Waldo"));
console.log(isWaldoHere("hello every one"));

//10
function isEqualSlice(slice, people, piece) {
  let totalSlice = people * piece;

  if (slice < totalSlice) {
    return false;
  } else {
    return true;
  }
}
console.log(isEqualSlice(4, 5, 1));
console.log(isEqualSlice(9, 2, 1));

//11
function isEqualNumXandO(str) {
  let myStr = str.split("").sort();
  let sumX = 0;
  let sumO = 0;
  for (let i = 0; i < myStr.length; i++) {
    if (myStr[i] == "x") {
      sumX += 1;
    }
    if (myStr[i] == "o") {
      sumO += 1;
    }
  }
  if (sumX == sumO) {
    return true;
  } else {
    return false;
  }
}

console.log(isEqualNumXandO("ooxx"));
console.log(isEqualNumXandO("xooxx"));
console.log(isEqualNumXandO("zpzpzpp"));

//12
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}
console.log(isPrime(7));
console.log(isPrime(9));

//13
function emailValidation(str) {
  if (str == undefined) {
    console.log("please enter your email.-- " + str);
    return false;
  }
  if (
    str.charAt(str.indexOf("@") - 1) == "." ||
    str.charAt(str.indexOf("@") + 1) == "."
  ) {
    console.log("dot can not be exactly after or before @.-- " + str);
  }
  if (str.length < 1) {
    console.log("email address is too short.-- " + str);
    return false;
  }
  if (str.charAt(0) == "." || str.charAt(str.length - 1) == ".") {
    console.log(" Dot character is not in right place.-- " + str);
    return false;
  }
  if (str.charAt(0) == "@" || str.charAt(str.length - 1) == "@") {
    console.log("@ can not be a first or last character.-- " + str);
    return false;
  }
  if (str.length - 1 == str.indexOf("@")) {
    console.log("@ must have at least one character in front of it.--  " + str);
    return false;
  }
  if (str.includes("@") != 1) {
    console.log("exactly one @ is necessary.-- " + str);
    return false;
  }
  if (str.includes(".") < 1) {
    console.log("at least one dot should be include.-- " + str);
    return false;
  }
  return true;
}

console.log(emailValidation("1emailValidationcom"));
console.log(emailValidation("1emailVa@lidation.com"));
console.log(emailValidation("@1emailValidation.com"));
console.log(emailValidation(".com"));
console.log(emailValidation());
console.log(emailValidation("s@."));
console.log(emailValidation("are3@gmal.com"));
