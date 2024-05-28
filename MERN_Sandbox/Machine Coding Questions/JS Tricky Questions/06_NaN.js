// Q.1) What will be the output of the below statement?
// console.log(NaN==NaN);
// Q.2) What is the difference between isNaN() and isFinite() method?

let a = 5;
let b = "value";
console.log(a * b);
if (isNaN(a * b)) {
  console.log("Not Valid Number");
} else {
  console.log("Valid Number");
}

console.log(isFinite(a * b)); //false
console.log(isFinite(5 * 5)); //true
console.log(isFinite(Number.MAX_VALUE * 4)); //false
console.log(isFinite(Infinity)); //false
console.log(NaN === NaN); //false

//isFinite() :
//checks for NaN as well infinity and -infinity
//checks weather value is regular number or not

isNaN(NaN); // true
isNaN(123); // false
isNaN("123"); // false (string "123" is converted to number 123)
isNaN("abc"); // true (string "abc" cannot be converted to a number)
