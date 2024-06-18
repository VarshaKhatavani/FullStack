/**

Q.1) What will be the output of the below statement?
console.log(NaN==NaN);
Ans :  NaN doesn't match with itself. It returns false 

Q.2) What is the difference between isNaN() and isFinite() method?
Ans : 

    isNaN() check for not a number only while
    isFinite() checks if its argument is not NaN , or negative infinity or positive positive infinity value as well. 

 * isFinite function determines if the passed argument is finite value. 
 * 
 * isNaN on the other hand determines whether the argument passed is a NaN or not.

   isFiniteNumber = function(num) {
         return isFinite(num) && !isNaN(num); 
    }; 
    
 */

let a = 5;
let b = "value";
console.log(a * b); // NaN

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
// NaN returns unquie value that's why it doesn't match with itself. So, use isNaN()

//isFinite() :
//checks for NaN as well infinity and -infinity
//checks weather value is regular number or not

isNaN(NaN); // true
isNaN(123); // false
isNaN("123"); // false (string "123" is converted to number 123)
isNaN("abc"); // true (string "abc" cannot be converted to a number)
