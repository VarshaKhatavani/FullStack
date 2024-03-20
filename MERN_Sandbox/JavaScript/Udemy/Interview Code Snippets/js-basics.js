let firstName = "Varsha";
//delete name ; // can not use in strict mode
console.log(firstName);
console.log(typeof null); // object

//precedence order between local and global variables
var msg = "good morning";
function greetings() {
  msg = "good evening";
  console.log(msg);
}
greetings();

// javascript accessors
let user = {
  firstname: "varsha",
  lastname: "khatavani",
  language: "en",
  get lang() {
    return this.language;
  },
  set lang(lang) {
    this.language = lang;
  },
};
console.log(user.language); // getter accessor will call
user.lang = "pt";
console.log(user.lang); // setter accessor will call

// load css and js files dynamically
var fileReference;
function loadAssets(fileName, fileType) {
  if (fileType === "css") {
    fileReference = document.createElement("link");
    fileReference.setAttribute("rel", "stylesheet");
    fileReference.setAttribute("type", "text/css");
    fileReference.setAttribute("href", fileName);
  } else if (fileType === "js") {
    fileReference = document.createElement("script");
    fileReference.setAttribute("type", "text/javascript");
    fileReference.setAttribute("src", fileName);
  }
  if (typeof fileReference !== "undefined") {
    document.getElementByTagName("head")[0].appendChild(fileReference);
  }
}

// js is loosely type language
let age = 50;
age = "fifty";
age = true;
console.log(age);

// set cursor on wait
function setWait() {
  window.document.body.style.cursor = "wait";
}
