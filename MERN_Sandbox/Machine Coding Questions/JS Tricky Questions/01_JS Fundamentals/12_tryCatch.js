/**Q.1) When do you need try...catch ? 
Q.2) How can you generate an error ?
Q.3) Can you generate SyntaxError or ReferenceError kind of errors ?
Q.4) What is the purpose of the finally block ?
Q.5) How can you refer to the name or description of error ?
Q.6) Can we have finally without a catch block as well ? */

// let a = 10;
// console.log(`value of ${a}`); // value of 10

// letb = 20;
// console.log(`value of ${b}`); // ReferenceError: b is not defined

//Code 2
try {
  let a = 10;
  console.log(`value of ${a}`); // value of 10

  letb = 20;
  console.log(`value of ${b}`); // ReferenceError: b is not defined
} catch (error) {
  console.log("Error Found");
}

//Code 3
try {
  let a = 10;
  console.log(`value of ${a}`); // value of 10
  letb = 20;
  console.log(`value of ${b}`); // ReferenceError: b is not defined
} catch (error) {
  console.log("Error Found");
  console.log("Error Name : ", error.name);
  console.log("Error Message :", error.message);
  console.log("Error Stack :", error.stack);
}

// Code 4 - Custom Error
let a = 8;
try {
  if (a < 18) throw new Error("Age should be greater than 18");
  else console.log("Valid age");
} catch (error) {
  console.log(error.name);
  console.log("Invalid age error : ", error.message);
}

// Code 5 - type Error - helps in debugging type-related issues.
let no = "10";
try {
  if (no < 100) throw new TypeError("Invalid age!");
  else console.log("Valid age!");
} catch (err) {
  console.log(err.name); //TypeError;
  console.log(err.message); //Invalid age!
} finally {
  console.log("Alway Run Finally code");
}
