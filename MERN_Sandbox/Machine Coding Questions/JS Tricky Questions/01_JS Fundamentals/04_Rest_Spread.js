/*
Q.1) Can we use arguments object in arrow function?
Ans : No, it can not be used. 

Q.2) Which is the best way to create new arrays with assignment?
Ans : 

      let arr1 = [1, 2, 3, 4, 5];
      let arr2 = [...arr1, 6, 7, 8];

      console.log(arr2);

Q.3) How can you handle the “n” number of parameters passed to a function ? 
     or create a function which can take any number of parameters and returns sum or max or any other such calculative values.
Ans :

      function sum(...args) {
        console.log(args); // rest operator converts to array : [4,4]
      }


Q.4) Can the rest operator be placed anywhere in the function parameter list? Or
      function test(...a,b){
        ...statements...
      }
      Is
       this piece of code valid? Give the reason.
Ans : We can not have rest parameter in the begining. It should be last if it's rest
      parameter.
*/

// ****** Rest ********
// create a function which takes any number of arguments
function sum(...args) {
  console.log(args); // rest operator converts to array : [4,4]
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum = sum + args[i];
  }
  console.log("Sumation : ", sum);
}

sum(4, 4);
sum(1, 2, 3, 4, 5, 6, 7);

const add = () => {
  console.log(arguments); // Arrow functions do not have their own arguments object
};
add(4, 5);
add(5, 6, 7, 8);

// you need to explicitly list them in the function parameters or use a regular function.
const add2 = function () {
  console.log(arguments);
};
add2(4, 5); // { '0': 4, '1': 5 }
add2(5, 6, 7, 8); // { '0': 5, '1': 6, '2': 7, '3': 8 }

// A rest parameter must be last in a parameter list
//function test(...a,b){
//...statements...
//}

// ****** Spread ********

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 6, 7, 8];

console.log(arr2);

let arr = [1, 5, 45, 78, 90];
console.log(Math.max(...arr)); //90
