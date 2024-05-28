// Q.1) How will you put a validation for positive or negative Infinity?
// Q.2) What will be the output of this code?
// Code:
// console.log(1/0);

//Any value which can not fit into 64-bit then JS returns infinity

console.log(Number.MAX_VALUE);

console.log(Number.POSITIVE_INFINITY); //Infinity
console.log(Number.NEGATIVE_INFINITY); //-Infinity

console.log(16e5); // 1600000
// 16 * 1 * 100000(5)

console.log(9e400); // Infinity
console.log(-9e400); //-Infinity

console.log(Number.MAX_VALUE * 2); //Infinity

let num = 235235;
if (num === Number.POSITIVE_INFINITY) {
  console.log("Positive Infinite Value");
} else {
  console.log(num);
}

console.log(1 / 0); // Infinity
