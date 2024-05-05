// JavaScript breathes life into static websites, turning them dynamic.
// It allows a website to interact with the user, respond to their actions,
// and dynamically update the content without requiring a page reload.

// *** The Window Object ****

// The window object is the root of the DOM tree,
// and this object is used to instruct the browser to do tasks like:

// Displaying an alert box or a prompt
// Log messages or errors to the console
// Access the browser’s local storage
// Access the document object

console.log(window);
window.console.log("Hello World!");

//*** The Document Object */

// The document object is the entry point for all HTML elements that you write
// in your document.

console.log(document.title);
console.log(document.URL);
console.log(document.referrer);
console.log(document.domain);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// **** DOM Maniulation Methods ****

const pElement = document.querySelector(".myParagraph");
pElement.innerText = "Hello, I am Paragraph.";

// Class Attribute

pElement.classList.add("myClass");
pElement.classList.add("testClass");
pElement.classList.remove("testClass");
pElement.classList.replace("myClass", "newClass");
pElement.classList.toggle("newClass"); // add or remove class
console.log(pElement.classList.contains("testClass")); // false

// add a class
pElement.classList.add("color-primary");

// replace a class
pElement.classList.replace("color-primary", "color-secondary");

// remove a class
pElement.classList.remove("color-secondary");

pElement.style.fontWeight = "800"; // set font weight
pElement.style.textTransform = "uppercase"; // set to uppercase
pElement.style.color = "#007bff"; // set color

pElement.style.border = "1px solid black";

// **** Create, Add, and Remove Elements *****

const div = document.createElement("div");
div.innerText = "Hey, I am Div Tag";

const body = document.querySelector("body");
body.append(div);

// Insert Element at a Specific Position
const h2 = document.createElement("h2");
h2.innerText = "I am h2 element";
body.insertBefore(h2, div);

// Note : 📝
// DOM doesn’t provide an insertAfter() method, because it’s not needed.
// You use the append() method to insert an element at the last position.

// **** Manipulating Element Attributes ****

const img = document.querySelector("#profile-pic");
// img.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// );
img.setAttribute("alt", "profile-picture");
img.removeAttribute("alt");

let attr = img.getAttribute("alt");
console.log(attr);
console.log(img.getAttribute("href")); // null

// Delete the src attribute
//img.removeAttribute("src");

// **** Manipulating Data Attributes *****

let myDiv = document.querySelector("#intro");
console.log(myDiv.dataset.session);
console.log(myDiv.dataset.attributeTheme);

// Remove data-attribute-theme attribute
// img.removeAttribute("data-attribute-theme");
