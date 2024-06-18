/**
Q.1) When do you need try...catch ? 
Ans : try...catch is handled at runtime. Sometimes it happens that due to some unforseen 
      situation code stopped executing. To avoid such scenarios try..catch block is used.

      Handling the error without breaking the code execution.

Q.2) How can you generate an error ?
Ans : We can generate custom errors using "throw" statements

      let ageError = new Error("Age must be greater than or equal to 18");
      try{
          if(age<18)
              throw ageError ; 
      }
      catch(err){
          console.log(err.message);
      }


Q.3) Can you generate SyntaxError or ReferenceError kind of errors ?
Ans : yes, we can generate such errors. 

SyntaxError
A SyntaxError occurs when the code violates the syntax rules of JavaScript.

console.log("Hello World"  // Missing closing parenthesis

ReferenceError
A ReferenceError occurs when trying to reference a variable that is not declared.

console.log(nonExistentVariable);  // Variable is not declared

Q.4) What is the purpose of the finally block ?
Ans : The finally block in JavaScript is used to execute code after a try and catch block, 
      regardless of whether an exception was thrown or caught. 

      The primary purposes of the finally block are:

      1. Resource Cleanup
         => resources such as file handles, network connections,
            or database connections are properly released.

      2. Post-Operation Code
        => such as logging, resetting variables, or other final operations.

Q.5) How can you refer to the name or description of error ?
Ans : catch(err){
        console.log(err.message)
        console.log(err.name)
      }

Q.6) Can we have finally without a catch block as well ? 
Ans : 
      try{
        // statements
      }finally{
        // statements
      }
*/

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
