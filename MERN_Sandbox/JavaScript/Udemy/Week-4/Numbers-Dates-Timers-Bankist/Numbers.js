console.log(15 === 15.0); // true
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

// Convert String to Number
let no = Number('5');
console.log(typeof no); // number
let no2 = +'15';
console.log(typeof no2); // number

// ****************** Parsing *******************
console.log(Number.parseInt('30px')); // 30
console.log(Number.parseInt('e25')); // NaN

//Decimal
console.log(Number.parseInt('30px', 10)); //30

//Octal
const octalString = '17'; // Octal representation of decimal 15
const parsedOctal = Number.parseInt(octalString, 8);
console.log(parsedOctal); // Output: 15

//HexaDecimal
const hexString = '1F'; // Hexadecimal representation of decimal 31
const parsedHex = Number.parseInt(hexString, 16);
console.log(parsedHex); // Output: 31

console.log(Number.parseInt('2.5rem')); //2
console.log(Number.parseFloat('2.5rem')); //2.5

// isNaN : first convert it to number then checks if it's not a number
// The value 20 is clearly a number, not NaN.
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); // false

console.log(Number.isFinite(20)); //true
// 23/0 ==> Infinity
console.log('isNaN(23 / 0)', Number.isNaN(23 / 0));

// isFinite() : The isFinite() function in JavaScript checks whether a value is a finite number or not.
// A finite number is any number that is not NaN, Infinity, or -Infinity
console.log(isFinite(42)); // true, 42 is a finite number
console.log(isFinite(NaN)); // false, NaN is not a finite number
console.log(isFinite(Infinity)); // false, Infinity is not a finite number
console.log(isFinite(-Infinity)); // false, -Infinity is not a finite number
console.log(isFinite('foo')); // false, 'foo' is not a number
console.log(isFinite(true)); // true, true is coerced to 1, which is a finite number
console.log(isFinite(null)); // true, null is coerced to 0, which is a finite number
console.log(isFinite([])); // true, empty array is coerced to 0, which is a finite number
console.log(isFinite(+'42')); // true : converted to Number

//isInteger
console.log(Number.isInteger(67)); // true
console.log(Number.isInteger(67.9)); // false
console.log(Number.isInteger(12 / 0)); // false

// **************** Math *****************
console.log(Math.sqrt(25));

console.log(25 ** (1 / 2)); // 5  | Square root of 25
// 1/2 : 0.5
// 25 ** 0.5 raises 25 to the power of 0.5

console.log(8 ** (1 / 3)); // 3 | Cube of 8
// 1 / 3 calculates the value of one third, which is 0.333....
// 8 ** 0.333... raises 8 to the power of 0.333...,
// which is equivalent to taking the cube root of 8.

//Max Value
console.log(Math.max(5, 18, 87, 2, 1)); // 87
console.log(Math.max(5, 18, '87', 2, 1)); // 87
console.log(Math.max(5, 18, '87px', 2, 1)); // NaN

//Min Value
console.log(Math.min(4, 6, 1, 9, 9, 11)); // 1

//Random Number
console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

console.log(Math.trunc(Math.random() * 6)); // random int from 0-5

console.log(Math.trunc(Math.random() * 6) + 1); // 0-6

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min)) + min;
console.log(randomInt(10, 20));

// ************ Rounding ***************
console.log(Math.round(25.5)); // 26
console.log(Math.round(49.111)); //49

console.log(Math.ceil(22.5)); // 23
console.log(Math.ceil(22.1)); // 23

console.log(Math.floor(56.588)); // 56
console.log(Math.floor(56.012)); // 56

console.log(Math.trunc(45.5)); // 45
console.log(Math.trunc(-45.5)); // -45
console.log(Math.floor(-45.5)); // -46

// ************* Rounding Decimals **************
console.log((2.5).toFixed(0)); // 3 - convert to number
console.log((2.5).toFixed(2)); // 2.50
console.log((2.5).toFixed(3)); // 2.500
console.log((2.135).toFixed(2)); // 2.13

//*************** Numeric Seperators ************
// 16,15,976
const value = 16_15_976;
console.log(value);

const price = 345_99;
console.log(price);

console.log(+'230_000'); // NaN
console.log(+230_000); // 2,30,000

// *************** Big Int ******************
console.log(683726863489692493792749270980907); // 6.837268634896925e+32

console.log(683726863489692493792749270980907n);
// 683726863489692493792749270980907n

console.log(BigInt(683726863489692493792749270980907));
// 683726863489692499320823993073664n

const longNum = 8686343987964287588876868n;
const num = 42;
//console.log(longNum * num); // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

console.log(longNum * BigInt(num)); // 364826447494500078732828456n

// *********** Exceptions *************
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n, typeof 20); // bigint number
console.log(20n == 20); // true
console.log(22n / 2n); // 11n
