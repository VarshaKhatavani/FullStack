// ASI - Automatic Semicolon Insertion

// Q.1) Should you terminate all lines by a “;” ?
// Q.2) Why this code is returning undefined in spite of function returning a valid object literal ?
//  function test(){
//    	 return
//    	{
//         a:5
//     	}
//  }
//         const obj=test();
//         console.log(obj);
// Q.3) Can ‘use strict’ statement or the strict mode change the behavior of ASI ?

console.log("Hi");
console.log("Test");

let a = 1600000 / 12;
console.log(a);

function test() {
  return; // If curly braces are mentioned below then JS automatically adds semicolon - reason undefined output
  {
    a: 5;
  }
}

const obj = test();
console.log(obj); // undefined

function testMethod() {
  return {
    a: 5,
  };
}

const obj1 = testMethod();
console.log(obj1); // { a: 5 }
