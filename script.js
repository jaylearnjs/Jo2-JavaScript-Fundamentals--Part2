"use strict";

/*
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
*/

/*
//Functions
function logger() {
  console.log("My Name is Abcd");
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
    const juice = `Juice with ${apples} and ${oranges} oranges.`;
    return juice
}


const applejuice = fruitProcessor(5, 2);
console.log(applejuice);
console.log(fruitProcessor(4,2));
*/

/*
// Function Declaration
function calcAge1(birthYear) {
  return 2030 - birthYear;
}

const age1 = calcAge1(1991);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2030 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

/*
// Arrow Function
const calcAge3 = (birthYear) => 2030 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2030 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "ajay"));
console.log(yearsUntilRetirement(1980, "vinati"));
*/

/*
// Functions calling other functions

const cutFruitPieces = (fruit) => fruit * 4;

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const fruit = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`
  return fruit;
}

console.log(fruitProcessor(5, 6));
*/

/*
const calcAge = function (birthYear) {
  return 2030 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`)
    return age;
  } else {
    console.log(`${firstName} has already retired🥳`)
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950,'Mike'))
*/
