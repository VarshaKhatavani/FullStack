/**
 * * Q.1) What is function currying?
 *  Ans : 
 * 
 *  "Currying allows you to partially apply a function, which means that you can 
 *   pass some of the arguments of the function later."
 * 
 * 
 * * Q.2) const multiplication=a=>b=>c=>return a*b*c. 
 *        What will this statement do? Explain in detail.
 *  Ans : 
 * 
 *    function multiplication(a){
 *       return function(b){
 *          return function(c){
 *              return a * b * c ;
 *        }
 *      }
 *    }
 * 
 *    const multiplyA = multiplication(2);
      const multiplyAB = multiplyA(3);
      const result = multiplyAB(4);

      console.log(result); // 24
 * 
 * * Q.3) Explain practical usage of function currying. 
*  Ans :  

   Currying is an incredibly useful technique of functional programming which 
   solves various purposes like passing partial parameters or avoiding unwanted 
   repetations. 

    const priceCalculation = (price) => {
      return (discountedPrice) => {
        return price * discountedPrice;
      };
    };

    const price = priceCalculation(2000);
    console.log(price(0.05)); // 100
    console.log(price(0.03)); // 60

*/
// ** closure vs curring

// * Currying breaks down a complex function into smaller, reusable units.
// * Currying allows you to pre-fill some arguments of a function and
// * create a new function with the remaining arguments

// * currying is useful in such cases to pass the partial parameters

const sum = function (a) {
  return function (b) {
    return a + b;
  };
};
const cl = sum(5);
const ans = cl(6);
console.log(ans); // 11
const result = sum(6)(2);
console.log(result); // 8

// use case of currying
const priceCalculation = (price) => {
  return (discountedPrice) => {
    return price * discountedPrice;
  };
};

const price = priceCalculation(2000);
console.log(price(0.05)); // 100
console.log(price(0.03)); // 60
