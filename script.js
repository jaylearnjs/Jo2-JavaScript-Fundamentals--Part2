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