/**

// ** Functional Behaviour of arrow function 

// ** 1. "this" object does not work with arrow function.
// ** 2. "arguments" object does not work with arrow function.
// ** 3. You can not use "new" to arrow funtion.

Q.1) Explain the syntactical features of arrow function.
Ans : 

  const sum = (a,b) => {
    return a + b ;
  }

  const square = no => no * no ; 

Q.2) Why “this” does not work in arrow function?
Ans : 

In ES6, we already have a class keyword to deal with the classes. We do not need the 
function to act as a class. "this" is actually needed to represent the current context. 
that's why arrow function is free from that job. 


Q.3) Explain output of following code with reason.
      const obj={
          method:()=>{
                console.log(this);
          }
      }
Ans : "this" does not work with Arrow function. It refers to window object. 

Q.4) How can you handle arguments object like functionality in arrow function?
Ans : using REST Paramater

Q.5) Can you write IIFE with arrow function syntax? 
Ans: 
(() => {
  console.log("IIFE");
})();

*/

// ** In arrow function "this" refers to window / global object

// ** In regular function "this" referes to local object

// ** earliar function also has a job of class. used to call using new keyword.
// ** But arrow function only works as function as in ES6 classes are introduced.
// ** We do not need arrow function to act as class

const obj = {
  method: () => {
    console.log(this); // window object
  },
};
obj.method();
