/**Q.1) Explain the syntactical features of arrow function.
Q.2) Why “this” does not work in arrow function?
Q.3) Explain output of following code with reason.
const obj={
     method:()=>{
                      console.log(this);
      }
}
Q.4) How can you handle arguments object like functionality in arrow function?
Q.5) Can you write IIFE with arrow function syntax? */

// ** In arrow function "this" refers to window / global object

// ** In regular function "this" referes to local object

// ** earliar function also has a job of class. used to call using new keyword.
// ** But arrow function only works as function as in ES6 classes are introduced.
// ** We do not need arrow function to act as class

const obj = {
  method: () => {
    console.log(this);
  },
};
obj.method();
