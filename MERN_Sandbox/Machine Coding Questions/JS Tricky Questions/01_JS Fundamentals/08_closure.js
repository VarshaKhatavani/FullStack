/* Q.1) How can you access private variable or function outside the scope ?
 *
 * Ans : Using Closure
 *
 * Q.2) Explain the advantage of closure ?
 *
 * Ans : The main adv of "closure" is that any member which is private for certain
 *       scope can be accessed keeping it private so that the variable is away from
 *       any accidental change of value.
 *
 *       Accessing private member with closure pattern assure better approach of
 *       making a variable global.
 */

// Using Closure make  private/local variable act as global variable.
// few members which you want outer function can access based on condition.

// Code 1
try {
  function outer() {
    function inner() {
      console.log("Inner Called..");
    }
  }
  inner(); // ReferenceError: inner is not defined
} catch (error) {
  console.log(error.stack);
}

// Code 2
try {
  function outer() {
    function inner() {
      console.log("Inner ... Called...");
    }
    inner(); // Inner ... Called...
  }
  outer();
} catch (error) {
  console.log(error.message);
}
/*** Output : Innner called */

// Code 3
function outer() {
  function inner() {
    console.log("Inner fun called...");
  }
  return inner; //  passing just Reference of inner function not calling function
}
outer();

// Code 4
try {
  function outer1() {
    function inner1() {
      console.log("Inner function Called...");
    }
    return inner1;
  }
  const inner = outer1();
  inner(); // Inner function Called...
} catch (e) {
  console.log(e.message);
}

// Code 5 - Currying
const addCounter = () => {
  let counter = 0;
  counter++;
  return counter;
};

console.log(addCounter()); // 1
console.log(addCounter()); // 1

// Code 6
const count = () => {
  let cnt = 0;
  return () => {
    return cnt++;
  };
};
const counter = count();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
