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


/*
// Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

/*
// Array
const friend1 = 'Michel';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ["Michel", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1992, 1993, 1994, 1995);
console.log(y);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2030 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);
console.log(jonas[jonas.length - 1]);

// Exercise
const calcAge = function (birthYear) {
  return 2030 - birthYear;
}
const years=[1950,1960,1970,1985,1992]

const age1 =calcAge(years[0]);
const age2 =calcAge(years[1]);
const age3 =calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages)
*/

// Basic Array Operation(Methods)
const friends = ["Michel", "Steven", "Peter"];
console.log(friends);
//ADD Elements
const newLength = friends.push('Jay');
console.log(friends)
console.log(newLength);

friends.unshift('John');
console.log(friends);

//Remove Elements
const popped = friends.pop();
console.log(popped);
console.log(friends)

friends.shift();
console.log(friends);

console.log(friends.indexOf('Peter'));
console.log(friends.indexOf('Jay'))

friends.push(23);
console.log(friends.includes("Peter"));
console.log(friends.includes("Jay"));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You Have a friend Called Steven');
}



