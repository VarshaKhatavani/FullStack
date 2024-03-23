// ************* Example 1: const behaviour *************

const userList = [];
userList.push("Varsha");
console.log(userList); // Varsha : Worked because not changing the reference

// const userName = "Varsha";
// userName = "Julie";
// console.log(userName); // TypeError: Assignment to constant variable.

// ************* Example 2: Nested template *************

const user = {
  name: "varsha",
  isAuthorized: true,
};

function isMobilePlatform() {
  return false;
}

// nesting template
const iconStyles = `icon - ${
  isMobilePlatform() ? "" : `icon-${user.isAuthorized ? "submit" : "disabled"}`
}`;

console.log(iconStyles);

// without nesting template
const icon = `icon - ${
  isMobilePlatform() ? "" : user.isAuthorized ? "icon-submit" : "icon-disabled"
}`;

console.log(icon);

// ************* Example 3: tagged template *************

// string args (Array form) + expressions

var user1 = "John";
var skill1 = "JavaScript";
var experience = 15;

var user2 = "Kane";
var skill2 = "JavaScript";
var experience2 = 5;

function myInfoTag(strings, userExp, experienceExp, skillExp) {
  console.log(strings); // [ 'Mr.', ' is an ', ' in ', '' ]
  var str0 = strings[0];
  var str1 = strings[1];
  var str2 = strings[2];

  var expertiseStr;
  if (experienceExp > 10) {
    expertiseStr = "expert developer";
  } else if (skillExp > 5 && skillExp < 10) {
    expertiseStr = "senior developer";
  } else {
    expertiseStr = "junior developer";
  }
  return `${str0}${userExp}${str1}${expertiseStr}${str2}${skillExp}`;
}
console.log(myInfoTag`Mr.${user1} is an ${experience} in ${skill1}`);

// ***************** Destructuring ******************

//Array
var [one, two, three] = ["JAN", "FEB", "MAR", "APR"];
console.log(one);
console.log(two);
console.log(three);

//Objects
var { name, age } = { name: "varsha", age: "30" };
console.log(name);
console.log(age);

// Default Destructuring

//Array
var [one = 10, two = 20, three = 30] = [10];
console.log(one);
console.log(two);
console.log(three);

//Objects
var { name = "julie", age = "30" } = { age: "30" };
console.log(name);
console.log(age);

// swap value in destructuring
var x = 10,
  y = 20;
[x, y] = [y, x];
console.log(x); // 20
console.log(y); // 10

// destructuring alias
const obj = { x: 1 };
const { x: newName } = obj;
console.log(newName); // 1

// enhanced object literals
var a = 10;
var b = 20;
let object = { a, b }; // ES6
let oldObject = { a: 100, b: 200 }; //ES5
console.log(object);
console.log(oldObject);

//switch case
value = 10;
switch (value) {
  case value:
    console.log("I'm case 1");
    break;

  case value:
    console.log("I'm case 2");
    break;

  default:
    console.log("I'm default block");
    break;
}

//key = number/string
//break
//default

// need of semicolon

/***
 * var fn = (function () {
     console.log("first function");
    })(
   //semicolon missing at this line
    console.log("middle"), // Uncaught TypeError: (intermediate value)(...) is not a function
    function () {
      console.log("second function");
    }
  )();

  fn();
 * 
 */

/**
 * here console.log() is being taken as an argument of first IIFE function
 console.log("middle") ****** returns ***** undefined
result of first function is **** undefined
here  you're trying to call it as a function

error: // Uncaught TypeError: (intermediate value)(...) is not a function
 * */

//Solution
var fn2 = (function () {
  console.log("first function");
  return function () {
    console.log("returned function");
  };
})(console.log("middle"), function () {
  console.log("second function");
});

fn2(); // This will log "first function" and "returned function
// second function is not console because it's passed as an arg of IIFE
