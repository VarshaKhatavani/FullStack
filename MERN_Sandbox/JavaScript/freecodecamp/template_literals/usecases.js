/**Template literasl are a feature in JavaScript that let developers work with strings in a convenient way. */

// ******Use Cases of Template Literals *****/

// ***** 1. Generating HTML Markup *****/
const user = {
  name: "marie",
  age: 25,
};

const userProfile = `<div>
    <h2>Name : ${user.name}</h2>
    <p>Age : ${user.age}</p>
</div>`;
console.log(userProfile);

//****** 2. Creating Dynamic SQL Queries *****/
const tableName = "users";
const columnName = "name";
const searchValue = "John";

const sqlQuery = `SELECT * FROM ${tableName} WHERE ${columnName} = '${searchValue}'`;
console.log(sqlQuery);

//***** 3. Localization and Internalization *****/
const userData = {
  name: "Marie",
};

const locale = "fr";

const greetings = {
  en: "Hello",
  es: "Halo",
  fr: "Bonjor",
};

const localizedGreeting = `${greetings[locale]}, ${userData.name}!`;
console.log(localizedGreeting);

//***** 4. Tagged Template Literals ****

// They are a more advanced form of template literals
// which allow us to parse template literals with a function,
// giving us more control over how we want this string to be parsed.

function taggedFunc(strings, ...values) {
  console.log(strings); // [ 'Hello ', '. Welcome to ', '' ]
  console.log(values); // [ 'Varsha', 'Pune' ]
}

const nm = "Varsha";
const city = "Pune";

taggedFunc`Hello ${nm}. Welcome to ${city}`;

//taggedFunc`Hello ${name}. Welcome to ${city}.` ✅
//taggedFunc(Hello ${name}. Welcome to ${city}.) ❌

// Note ⚠️ : like a regular function, you won't call it with a parenthesis. But by attaching it before the first backtick of the template literal.
