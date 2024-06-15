/*ASI - Automatic Semicolon Insertion

Q.1) Should you terminate all lines by a “;” ?
Ans : It's a good practice to have a ";" at the end of line. If you do not add ; then 
      line should not end in improper way. 

Q.2) Why this code is returning undefined in spite of function returning a valid object literal ?
 function test(){
   	 return
   	{
        a:5
    	}
 }
 const obj=test();
 console.log(obj);

Ans : undefined. Internally JS adds ;  after return as object literal is in new line.

Q.3) Can ‘use strict’ statement or the strict mode change the behavior of ASI ?
Ans : No, it doesn't change the behaviour, if you write "use strict" it doesn't mean you
      have to end all lines using ";"
*/

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
