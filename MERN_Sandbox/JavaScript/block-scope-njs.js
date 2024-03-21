
let a = 100 ; // script block
function x(){  // stored in seperate block
    let a = 10 ;
    console.log(a);
}
x();
console.log(a); // 100 ;

/************************************/

var b = 100 ; // global block
function xb(){  // stored in seperate block
    var b = 10 ;
    console.log(b); // 10
}
xb();
console.log(b); // 100

/************************************/

var c = 100 ; // global block
{  // stored in  block scope
    var c = 10 ;
    console.log(c); 
}
xb();
console.log(c); // 10  here c is shadowing the value / var 

/************************************/

// illegal shadowing
// let a1 = 10;
// {
//     var a1 = 200 ;
// }

/************************************/

function A(){
    console.log(Z);
}
var Z = 22 ;
A(); // output: 22

/************************************/

function A1(){
    var Z1 = 22 ;  // assign to seperate scope  
}
A1(); 
console.log(Z1); // ReferenceError: Z is not defined

// Note : scope for arrow function & normal function is same only